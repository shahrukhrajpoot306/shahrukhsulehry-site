import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../content/site'
import NotFound from './NotFound'
import { whatsappUrl } from '../lib/links'
import { useSeo } from '../lib/useSeo'
import { Container, CtaLink, Reveal, WaIcon } from '../components/ui'

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return <NotFound />
  return <CaseStudyPage cs={cs} />
}

function CaseStudyPage({ cs }: { cs: (typeof caseStudies)[number] }) {
  useSeo(cs.seoTitle, cs.seoDescription, `/work/${cs.slug}`)
  return (
    <article className="pt-28 pb-20 sm:pt-36">
      <Container className="max-w-4xl">
        <Link to="/#work" className="font-mono text-xs text-muted hover:text-ink">← Back</Link>
        <p className="mt-8 font-mono text-xs tracking-widest text-signal uppercase">Case study · {cs.industry} · {cs.year}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{cs.title}</h1>
        <p className="mt-5 text-muted">{cs.meta}</p>

        {/* Results table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-left">
            <caption className="sr-only">At a glance</caption>
            <tbody className="divide-y divide-line">
              {cs.results.filter((r) => !r.figure.startsWith('[')).map((r) => (
                <tr key={r.metric} className="grid gap-1 p-5 sm:table-row sm:p-0">
                  <th scope="row" className="font-mono text-xs tracking-wider text-muted uppercase sm:w-2/5 sm:p-5">{r.metric}</th>
                  <td className="font-display text-xl font-semibold sm:p-5">{r.figure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {cs.sections.map((s, i) => (
          <Reveal key={s.heading}>
            <section className="mt-16">
              <p className="font-mono text-xs text-muted">0{i + 1}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{s.heading}</h2>
              {s.paragraphs?.filter((t) => !t.startsWith('[')).map((p) => <p key={p} className="mt-4 text-lg leading-relaxed text-ink/85">{p}</p>)}
              {s.bullets && (
                <ul className="mt-5 space-y-4">
                  {s.bullets.filter((t) => !t.startsWith('[')).map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-ink/85">
                      <span className="mt-1 font-mono text-signal" aria-hidden="true">→</span><span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </Reveal>
        ))}

        <div className="mt-20 rounded-3xl border border-signal/30 bg-signal/[0.06] p-8 sm:p-12">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{cs.cta}</h2>
          <CtaLink href={whatsappUrl} event="whatsapp_click" location="case_study" className="mt-6"><WaIcon /> WhatsApp me</CtaLink>
        </div>
      </Container>
    </article>
  )
}
