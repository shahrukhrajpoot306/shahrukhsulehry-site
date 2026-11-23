import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { CtaLink, Heading, Label, Reveal, Section } from '../components/ui'

/* 08 — Experience (matches the CV) */
export function Experience() {
  const e = site.experience
  return (
    <Section id="experience">
      <Label text={e.label} />
      <Heading>{e.heading}</Heading>
      <ol className="mt-10 divide-y divide-line border-y border-line">
        {e.roles.map((r) => (
          <li key={r.company} className="grid gap-1 py-6 sm:grid-cols-[1fr_1fr_auto] sm:items-baseline sm:gap-x-6">
            <p className="font-display text-lg font-semibold">
              {r.company} <span className="font-sans text-sm font-normal text-muted">· {r.place}</span>
            </p>
            <p className="text-ink/80">{r.title}</p>
            <p className="font-mono text-sm text-muted">{r.dates}</p>
            <p className="mt-2 max-w-3xl leading-relaxed text-muted sm:col-span-3">{r.highlight}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs tracking-widest text-muted uppercase">{e.certsHeading}</h3>
          <ul className="mt-4 space-y-2">
            {e.certs.map((c) => (
              <li key={c} className="text-ink/90">{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs tracking-widest text-muted uppercase">Education</h3>
          <p className="mt-4 text-ink/90">{e.education}</p>
          <CtaLink href={site.contact.cvUrl} event="cv_download" location="experience" variant="secondary" className="mt-6">
            {e.cvLink}
          </CtaLink>
        </div>
      </div>
    </Section>
  )
}

/* 09 — Testimonials */
export function Testimonials({ sector, heading }: { sector?: string; heading?: string } = {}) {
  const t = site.testimonials
  const items = sector ? t.items.filter((it) => it.sector === sector) : t.items
  return (
    <Section id="testimonials">
      {!sector && <Label text={t.label} />}
      <Heading>{heading ?? t.heading}</Heading>
      <div className="mt-10 columns-1 gap-4 md:columns-2 lg:columns-3">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
            <figure className="rounded-2xl border border-line bg-surface p-6">
              <p className="mb-4 inline-block rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wider text-signal uppercase">{it.sector}</p>
              <blockquote className="leading-relaxed text-ink/90">“{it.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="font-semibold">{it.name}</p>
                <p className="text-sm text-muted">{it.role}</p>
                {it.caseStudy && <Link to={`/work/${it.caseStudy}`} className="mt-3 inline-block text-sm font-semibold hover:text-signal">Read the case study →</Link>}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* 10 — FAQ (native details/summary: keyboard-accessible, no JavaScript needed) */
export function Faq() {
  const f = site.faq
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Label text={f.label} />
          <Heading>{f.heading}</Heading>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {f.items.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                {it.q}
                <span className="font-mono text-signal transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-muted">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
