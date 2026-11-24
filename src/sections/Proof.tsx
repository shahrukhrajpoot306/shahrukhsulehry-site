import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { waLink, whatsappUrl } from '../lib/links'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import { Arrow, Heading, Label, Reveal, Section } from '../components/ui'
import { track } from '../lib/track'

/* 01 — The problem */
export function Problem() {
  const p = site.problem
  return (
    <Section id="problem">
      <Label text={p.label} />
      <Heading>{p.heading}</Heading>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {p.items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-xs text-warn">PROBLEM 0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted">{it.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-10 max-w-2xl text-lg text-ink/90">{p.closing}</p>
      </Reveal>
    </Section>
  )
}

/* Service-area pills: click one to see what it covers */
const ICONS: Record<string, string> = {
  trend: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  monitor: 'M3 4h18v12H3zM8 20h8M12 16v4',
  sparkles: 'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z',
  video: 'M3 6h12v12H3zM15 10l6-3v10l-6-3',
  palette: 'M12 3a9 9 0 100 18c1 0 1.5-.8 1.5-1.5 0-1.2-1-1.5-1-2.5s.8-1.5 2-1.5H17a4 4 0 004-4c0-4.7-4-8.5-9-8.5zM7.5 11.5h.01M10 7.5h.01M15 7.5h.01',
  search: 'M11 4a7 7 0 110 14 7 7 0 010-14zM21 21l-4.5-4.5',
  target: 'M12 3a9 9 0 110 18 9 9 0 010-18zM12 7a5 5 0 110 10 5 5 0 010-10zM12 11a1 1 0 110 2 1 1 0 010-2z',
}

function ServiceAreas() {
  const areas = site.services.areas
  const [active, setActive] = useState(0)
  const a = areas[active]
  return (
    <div className="mt-10">
      <div role="tablist" aria-label="Service areas" className="flex flex-wrap gap-3">
        {areas.map((it, i) => {
          const on = i === active
          return (
            <button key={it.label} type="button" role="tab" aria-selected={on} onClick={() => setActive(i)}
              className={`relative flex min-h-12 items-center gap-3 rounded-full py-1.5 pr-5 pl-1.5 text-base font-semibold transition-colors ${on ? 'text-bg' : 'border border-line bg-surface text-ink hover:border-signal/50'}`}>
              {on && <motion.span layoutId="area-pill" className="absolute inset-0 rounded-full bg-signal" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className={`relative flex h-9 w-9 items-center justify-center rounded-full ${on ? 'bg-bg text-signal' : 'bg-signal/10 text-signal'}`}>
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICONS[it.icon]} /></svg>
              </span>
              <span className="relative whitespace-nowrap">{it.label}</span>
            </button>
          )
        })}
      </div>
      <div className="mt-5 min-h-[9.5rem] rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div key={a.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}
            className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="font-display text-xl font-semibold">{a.label}</h3>
              <p className="mt-2 leading-relaxed text-muted">{a.body}</p>
            </div>
            <ul className="space-y-2">
              {a.points.map((p) => (
                <li key={p} className="flex gap-2 text-ink/90"><span className="text-signal" aria-hidden="true">✓</span>{p}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* 02 — Services: three packages (React Bits: SpotlightCard) */
export function Services() {
  const s = site.services
  return (
    <Section id="services">
      <Label text={s.label} />
      <Heading>{s.heading}</Heading>
      <p className="mt-5 max-w-2xl text-lg text-muted">{s.intro}</p>
      <ServiceAreas />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {s.packages.map((pk, i) => (
          <Reveal key={pk.title} delay={i * 0.06} className="h-full">
            <SpotlightCard
              spotlightColor="rgba(61, 220, 132, 0.3)"
              className="flex h-full flex-col !rounded-2xl !p-6 sm:!p-8 [--spotlight-card-surface:#14161A]"
            >
              <p className="font-mono text-xs text-signal">0{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{pk.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{pk.for}</p>
              <p className="mt-6 font-mono text-[11px] tracking-widest text-muted uppercase">What's included</p>
              <ul className="mt-3 space-y-2">
                {pk.includes.map((it) => (
                  <li key={it} className="flex gap-2 text-ink/90"><span className="text-signal" aria-hidden="true">✓</span>{it}</li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[11px] tracking-widest text-muted uppercase">How it starts</p>
              <p className="mt-2 text-ink/90">{pk.starts}</p>
              <a
                href={waLink(pk.ask)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('whatsapp_click', { location: `package_${i + 1}` })}
                className="mt-auto pt-8 text-sm font-semibold text-ink hover:text-signal"
              >
                {s.askCta} <Arrow />
              </a>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { location: 'services_card' })}
          className="mt-4 flex flex-col gap-3 rounded-2xl bg-signal p-6 text-bg transition hover:brightness-110 sm:flex-row sm:items-center sm:justify-between">
          <span>
            <span className="block font-display text-xl font-semibold">{s.helpCard.title}</span>
            <span className="mt-1 block text-bg/75">{s.helpCard.body}</span>
          </span>
          <span className="text-sm font-semibold whitespace-nowrap">{s.helpCard.cta} <Arrow /></span>
        </a>
      </Reveal>
    </Section>
  )
}

/* 02b — How I work: five steps (plain words + technical name) and the first 30 days */
export function Toolkit() {
  const t = site.toolkit
  return (
    <Section id="how">
      <Label text={t.label} />
      <Heading>{t.heading}</Heading>
      <p className="mt-5 max-w-2xl text-lg text-muted">{t.intro}</p>
      <ol className="mt-10 divide-y divide-line border-y border-line">
        {t.items.map((it, i) => (
          <li key={it.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:gap-x-6">
            <span className="font-mono text-sm text-signal">0{i + 1}</span>
            <h3 className="font-display text-xl font-semibold">{it.title}</h3>
            <div className="min-w-0">
              <p className="leading-relaxed text-ink/85">{it.body}</p>
              <p className="mt-2 font-mono text-xs tracking-wide text-muted">{it.tech}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12 rounded-3xl border border-line bg-surface p-6 sm:p-10">
        <h3 className="font-display text-2xl font-semibold">{t.first30.heading}</h3>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.first30.items.map((it) => (
            <li key={it.when} className="border-l-2 border-signal/60 pl-4">
              <p className="font-mono text-xs tracking-widest text-signal uppercase">{it.when}</p>
              <p className="mt-2 leading-relaxed text-ink/85">{it.what}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

/* 04 — Who I help: each card links to work in that sector */
export function Sectors() {
  const s = site.sectors
  const card = 'group flex h-full flex-col bg-bg p-6 transition-colors hover:bg-surface sm:p-8'
  return (
    <Section id="sectors">
      <Label text={s.label} />
      <Heading>{s.heading}</Heading>
      <p className="mt-5 max-w-2xl text-lg text-muted">{s.intro}</p>
      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((it, i) => {
          const body = (
            <>
              <p className="font-mono text-xs text-muted group-hover:text-signal">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{it.body}</p>
              {it.link && <span className="mt-auto pt-6 text-sm font-semibold text-ink/80 group-hover:text-signal">{s.linkCta} <Arrow /></span>}
            </>
          )
          if (!it.link) return <div key={it.title} className={card}>{body}</div>
          const to = it.link.startsWith('/') ? it.link : `/work/${it.link}`
          return <Link key={it.title} to={to} onClick={() => track('case_study_click', { location: 'sectors', case: it.link })} className={card}>{body}</Link>
        })}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { location: 'sectors_card' })}
          className="flex h-full flex-col bg-signal p-6 text-bg transition hover:brightness-110 sm:p-8">
          <h3 className="font-display text-xl font-semibold">{s.otherCard.title}</h3>
          <p className="mt-2 leading-relaxed text-bg/75">{s.otherCard.body}</p>
          <span className="mt-auto pt-6 text-sm font-semibold">{s.otherCard.cta} <Arrow /></span>
        </a>
      </div>
    </Section>
  )
}
