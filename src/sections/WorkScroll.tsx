import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'
import { caseStudies, site, type CaseStudy } from '../content/site'
import { Arrow, Container, Heading, Label } from '../components/ui'
import { track } from '../lib/track'

/* 04 — Selected work: a full-width sliding carousel.
   Drag/swipe, arrow buttons, number tabs, or let it play (it pauses on hover and when off screen).
   Add case studies in src/content/site.ts → caseStudies. */

const AUTOPLAY_MS = 6500
const GAP = 24

function Tabs({ tabs, filter, setFilter }: { tabs: string[]; filter: string; setFilter: (f: string) => void }) {
  return (
    <div role="tablist" aria-label="Filter work by sector" className="flex gap-2 overflow-x-auto pb-1">
      {tabs.map((f) => (
        <button key={f} type="button" role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
          className={`min-h-10 shrink-0 rounded-full border px-4 text-sm transition ${filter === f ? 'border-signal bg-signal font-semibold text-bg' : 'border-line text-muted hover:text-ink'}`}>
          {f}
        </button>
      ))}
    </div>
  )
}

function Card({ c, offset, calm, onPick }: { c: CaseStudy; offset: number; calm: boolean; onPick: () => void }) {
  const active = offset === 0
  const d = Math.min(Math.abs(offset), 2)
  const num = String(caseStudies.indexOf(c) + 1).padStart(2, '0')
  const words = c.title.split(' ')

  return (
    <motion.div
      className="h-full w-[86vw] shrink-0 sm:w-[72vw] lg:w-[min(64vw,880px)]"
      style={{ transformPerspective: 1400 }}
      animate={calm ? { opacity: active ? 1 : 0.5 } : {
        scale: 1 - d * 0.08,
        opacity: active ? 1 : 0.4,
        rotateY: Math.max(-1, Math.min(1, offset)) * -14,
        filter: active ? 'blur(0px)' : 'blur(2px)',
      }}
      transition={{ type: 'spring', stiffness: 180, damping: 26 }}
      onClick={(e) => { if (!active) { e.preventDefault(); onPick() } }}
    >
      <Link
        to={`/work/${c.slug}`}
        tabIndex={active ? 0 : -1}
        aria-hidden={!active}
        draggable={false}
        onClick={(e) => { if (!active) e.preventDefault(); else track('case_study_click', { location: 'work', case: c.slug }) }}
        className="group grid h-full overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-signal/50 lg:grid-cols-[0.9fr_1.1fr]"
      >
        {/* Cover */}
        <div className="relative min-h-44 overflow-hidden border-b border-line lg:border-r lg:border-b-0">
          <motion.div
            className="absolute -inset-10 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:28px_28px]"
            animate={calm ? {} : { x: active ? 0 : offset * 30, rotate: active ? 0 : offset * 2 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(61,220,132,0.35),transparent_60%)]"
            animate={{ opacity: active ? 1 : 0.2 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          <p className="absolute top-6 left-6 font-mono text-xs tracking-widest text-ink/70 uppercase">{c.sector} · {c.year}</p>
          <motion.p
            className="absolute right-4 bottom-0 font-display text-[8rem] leading-none font-semibold tracking-tighter text-ink/10 lg:text-[13rem]"
            animate={calm ? {} : { y: active ? 0 : 60, color: active ? 'rgba(61,220,132,0.28)' : 'rgba(243,244,246,0.08)' }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
          >
            {num}
          </motion.p>
          <p className="absolute bottom-6 left-6 z-10 max-w-[70%] font-display text-lg font-semibold [text-shadow:0_1px_12px_rgb(0_0_0/0.6)]">{c.client}</p>
        </div>

        {/* Text: title words rise in one by one when the card becomes active */}
        <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-10">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {words.map((w, i) => (
              <motion.span key={i} className="inline-block"
                initial={false}
                animate={calm || active ? { y: 0, opacity: 1 } : { y: 18, opacity: 0.25 }}
                transition={{ delay: active && !calm ? 0.15 + i * 0.04 : 0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                {w}{i < words.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </h3>
          <motion.div className="flex flex-1 flex-col"
            initial={false}
            animate={calm || active ? { y: 0, opacity: 1 } : { y: 14, opacity: 0.3 }}
            transition={{ delay: active && !calm ? 0.45 : 0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mt-4 leading-relaxed text-muted">{c.summary}</p>
            <p className="mt-5 flex gap-2 text-sm text-ink/90"><span className="text-signal" aria-hidden="true">✓</span>{c.highlight}</p>
            <p className="mt-2 text-sm text-muted">{c.platforms}</p>
            <span className="mt-auto pt-8 text-sm font-semibold text-ink group-hover:text-signal">{site.work.cta} <Arrow /></span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export function Work() {
  const w = site.work
  const calm = Boolean(useReducedMotion())
  const [filter, setFilter] = useState<string>('All')
  const tabs = w.filters.filter((f) => f === 'All' || caseStudies.some((c) => c.sector === f))
  const shown = caseStudies.filter((c) => filter === 'All' || c.sector === filter)
  const n = shown.length

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const section = useRef<HTMLElement>(null)
  const inView = useInView(section, { amount: 0.4 })
  const viewport = useRef<HTMLDivElement>(null)
  const first = useRef<HTMLDivElement>(null)
  const [geo, setGeo] = useState({ card: 800, view: 1200 })

  useEffect(() => setIndex(0), [filter])

  useLayoutEffect(() => {
    const measure = () => {
      const card = (first.current?.firstElementChild as HTMLElement | null)?.offsetWidth ?? 800
      setGeo({ card, view: viewport.current?.offsetWidth ?? window.innerWidth })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (viewport.current) ro.observe(viewport.current)
    return () => ro.disconnect()
  }, [n])

  const go = (i: number) => setIndex(((i % n) + n) % n)
  const playing = !calm && !paused && inView && n > 1
  // Centre the active card
  const x = geo.view / 2 - geo.card / 2 - index * (geo.card + GAP)

  return (
    <section id="work" ref={section} className="scroll-mt-16 overflow-hidden py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Label text={w.label} />
            <Heading>{w.heading}</Heading>
          </div>
          <p className="max-w-sm text-muted">{w.intro}</p>
        </div>
        <div className="mt-8"><Tabs tabs={tabs} filter={filter} setFilter={setFilter} /></div>
      </Container>

      <div ref={viewport} className="relative mt-10" aria-roledescription="carousel" aria-label={w.heading}
        onKeyDown={(e) => { if (e.key === 'ArrowRight') go(index + 1); if (e.key === 'ArrowLeft') go(index - 1) }}>
        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
            <motion.div
              ref={first}
              className="flex h-[min(62vh,540px)] min-h-[440px] cursor-grab touch-pan-y active:cursor-grabbing max-lg:h-auto"
              style={{ gap: GAP }}
              animate={{ x }}
              transition={calm ? { duration: 0 } : { type: 'spring', stiffness: 140, damping: 24, mass: 0.9 }}
              drag={n > 1 ? 'x' : false}
              dragConstraints={{ left: x, right: x }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70 || info.velocity.x < -400) go(index + 1)
                else if (info.offset.x > 70 || info.velocity.x > 400) go(index - 1)
              }}
            >
              {shown.map((c, i) => (
                <Card key={c.slug} c={c} offset={i - index} calm={calm} onPick={() => go(i)} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {n > 1 && (
        <Container>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex flex-1 gap-2" role="tablist" aria-label="Choose a project">
              {shown.map((c, i) => (
                <button key={c.slug} type="button" role="tab" aria-selected={i === index} aria-label={`Project ${i + 1}: ${c.client}`}
                  onClick={() => go(i)} className="group flex-1 py-3 text-left">
                  <span className={`font-mono text-xs ${i === index ? 'text-ink' : 'text-muted group-hover:text-ink'}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="mt-2 block h-0.5 overflow-hidden rounded-full bg-line">
                    {i === index && (
                      <motion.span key={`${filter}-${index}-${playing}`} className="block h-full origin-left bg-signal"
                        initial={{ scaleX: playing ? 0 : 1 }}
                        animate={{ scaleX: 1 }}
                        transition={playing ? { duration: AUTOPLAY_MS / 1000, ease: 'linear' } : { duration: 0 }}
                        onAnimationComplete={() => { if (playing) go(index + 1) }} />
                    )}
                    {i < index && <span className="block h-full bg-signal/40" />}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(index - 1)} aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition hover:border-signal hover:text-signal">←</button>
              <button type="button" onClick={() => go(index + 1)} aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink text-bg transition hover:bg-signal">→</button>
            </div>
          </div>
        </Container>
      )}
    </section>
  )
}
