import { lazy, Suspense, useEffect, useState } from 'react'
import { site } from '../content/site'
import { bookUrl, hasBooking } from '../lib/links'
import BlurText from '../components/reactbits/BlurText'
import { Link } from 'react-router-dom'
import { track } from '../lib/track'
import { Container, CtaLink } from '../components/ui'
import StarWhatsApp from '../components/StarWhatsApp'

// The animated background (React Bits: Threads) is loaded only on large screens,
// so phones never download it. Phones get a soft CSS glow instead.
const Threads = lazy(() => import('../components/reactbits/Threads'))

function useDesktopMotion() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    const big = window.matchMedia('(min-width: 1024px)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setOk(big && !calm)
  }, [])
  return ok
}

export default function Hero() {
  const h = site.hero
  const showThreads = useDesktopMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]" />
        {showThreads && (
          <Suspense fallback={null}>
            <div className="absolute inset-x-0 top-24 h-[560px] opacity-40">
              <Threads color="#3DDC84" amplitude={1.2} distance={0.2} lineCount={40} enableMouseInteraction />
            </div>
          </Suspense>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--color-bg))]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px]">
          <div>
            <div className="flex items-center gap-4">
              {/* Small photo on phones only (the big one sits further down) */}
              <img src="/images/shahrukh-sm.webp" alt="" width={56} height={70} className="h-14 w-14 rounded-full border border-line object-cover object-top lg:hidden" />
              <p className="font-mono text-xs tracking-widest text-muted uppercase">{h.eyebrow}</p>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-ink/90">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              {h.availability}
            </p>

            {/* Real heading for Google + screen readers; the animated copy below is visual only */}
            <h1 className="sr-only">{h.headline}</h1>
            <div aria-hidden="true">
              <BlurText
                text={h.headline}
                animateBy="words"
                direction="bottom"
                trigger="load"
                delay={90}
                className="mt-6 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl xl:text-7xl"
              />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{h.sub}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <StarWhatsApp location="hero" />
              {hasBooking && (
              <CtaLink href={bookUrl} event="book_call_click" location="hero" variant="secondary">
                {h.ctaBook}
              </CtaLink>
              )}
              <CtaLink href={site.contact.cvUrl} event="cv_download" location="hero" variant="ghost">
                {h.ctaCv}
              </CtaLink>
            </div>
          </div>

          {/* Photo */}
          <div className="relative mx-auto hidden w-full max-w-[340px] lg:block">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-b from-signal/25 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-surface">
              <img
                src={h.photo}
                alt={h.photoAlt}
                width={560}
                height={700}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 left-4 rounded-xl border border-line bg-bg/90 px-4 py-3 font-mono text-[11px] leading-tight text-muted backdrop-blur">
              <span className="text-signal">●</span> {h.photoChip}
            </div>
          </div>
        </div>

        {/* Proof strip: three kinds of proof, each linking to its case study */}
        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {site.proof.map((p) => (
            <li key={p.slug} className="bg-bg">
              <Link
                to={`/work/${p.slug}`}
                onClick={() => track('case_study_click', { location: 'hero_proof', case: p.slug })}
                className="group flex h-full flex-col p-5 transition-colors hover:bg-surface sm:p-7"
              >
                <span className="font-mono text-[11px] tracking-widest text-signal uppercase">{p.tag}</span>
                <span className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{p.figure}</span>
                <span className="mt-2 text-sm leading-snug text-muted">{p.label}</span>
                <span className="mt-4 text-sm font-semibold text-ink/80 group-hover:text-signal">{site.work.cta} <span aria-hidden="true">→</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
