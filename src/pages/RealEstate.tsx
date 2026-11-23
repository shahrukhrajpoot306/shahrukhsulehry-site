import { Link } from 'react-router-dom'
import { caseStudies, site } from '../content/site'
import { whatsappUrl } from '../lib/links'
import { useSeo } from '../lib/useSeo'
import { track } from '../lib/track'
import { Arrow, Container, CtaLink, Section, WaIcon } from '../components/ui'
import { Testimonials } from '../sections/About'

/** /real-estate — the deep page for brokerages and developers. Text lives in site.realEstate. */
export default function RealEstate() {
  const r = site.realEstate
  useSeo(r.seoTitle, r.seoDescription, '/real-estate')
  const cs = caseStudies.find((c) => c.slug === r.caseSlug)!
  const roles = site.experience.roles.filter((x) => (r.roles as readonly string[]).includes(x.company))
  return (
    <>
      <section className="pt-28 pb-8 sm:pt-36">
        <Container>
          <Link to="/" className="font-mono text-xs text-muted hover:text-ink">← Home</Link>
          <p className="mt-8 font-mono text-xs tracking-widest text-signal uppercase">{r.label}</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{r.heading}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{r.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={whatsappUrl} event="whatsapp_click" location="real_estate"><WaIcon /> {r.cta}</CtaLink>
            <CtaLink href={site.contact.cvUrl} event="cv_download" location="real_estate" variant="ghost">{site.hero.ctaCv}</CtaLink>
          </div>
        </Container>
      </section>

      {/* Featured case study */}
      <Section id="case">
        <Link to={`/work/${cs.slug}`} onClick={() => track('case_study_click', { location: 'real_estate', case: cs.slug })}
          className="group block rounded-3xl border border-signal/30 bg-signal/[0.05] p-6 transition-colors hover:bg-signal/[0.09] sm:p-10">
          <p className="font-mono text-xs tracking-widest text-signal uppercase">Case study · {cs.industry} · {cs.year}</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{cs.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{cs.summary}</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {cs.results.map((x) => (
              <div key={x.metric}>
                <dt className="font-mono text-[11px] tracking-widest text-muted uppercase">{x.metric}</dt>
                <dd className="mt-1 font-display text-xl font-semibold">{x.figure}</dd>
              </div>
            ))}
          </dl>
          <span className="mt-8 inline-block text-sm font-semibold group-hover:text-signal">{site.work.cta} <Arrow /></span>
        </Link>
      </Section>

      {/* In-house roles */}
      <Section id="roles">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{r.rolesHeading}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {roles.map((x) => (
            <div key={x.company} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs text-muted">{x.dates}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{x.company}</h3>
              <p className="text-ink/80">{x.title}</p>
              <p className="mt-4 leading-relaxed text-muted">{x.highlight}</p>
            </div>
          ))}
        </div>
      </Section>

      <Testimonials sector="Real estate" heading={r.testimonialsHeading} />
    </>
  )
}
