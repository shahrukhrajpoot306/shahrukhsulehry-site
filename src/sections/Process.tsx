import LogoLoop from '../components/reactbits/LogoLoop'
import { toolIcons } from '../lib/toolIcons'
import { site } from '../content/site'
import { whatsappUrl } from '../lib/links'
import { CtaLink, Heading, Label, Reveal, Section, WaIcon } from '../components/ui'

/* 05 — How we start */
export function Steps() {
  const s = site.steps
  return (
    <Section id="start">
      <Label text={s.label} />
      <Heading>{s.heading}</Heading>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {s.items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <li className="relative h-full rounded-2xl border border-line p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal font-mono text-sm font-bold text-bg">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted">{it.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <div className="mt-8">
        <CtaLink href={whatsappUrl} event="whatsapp_click" location="steps">
          <WaIcon /> {s.cta}
        </CtaLink>
      </div>
    </Section>
  )
}

/* 06 — My deal */
export function Deal() {
  const d = site.deal
  return (
    <Section id="deal">
      <div className="rounded-3xl border border-signal/30 bg-gradient-to-b from-signal/[0.07] to-transparent p-6 sm:p-12">
        <Label text={d.label} />
        <Heading>{d.heading}</Heading>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {d.items.map((it) => (
            <li key={it.title}>
              <p className="font-mono text-signal">✓</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* 07 — Tools (React Bits: LogoLoop on an arc, centre item magnified) */
const GROUP_COLORS = ['#3DDC84', '#5CC8FF', '#FFB547']

function ToolPill({ name, color }: { name: string; color: string }) {
  const icon = toolIcons[name]
  return (
    <span className="flex h-12 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1 pr-5 pl-1.5 whitespace-nowrap shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur" style={{ boxShadow: `inset 0 0 0 1px ${color}22` }}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
        {icon ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d={icon.path} fill={`#${icon.hex}`} /></svg>
        ) : (
          <span className="font-mono text-xs font-bold text-bg">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </span>
      <span className="text-base font-medium text-ink">{name}</span>
    </span>
  )
}

export function Tools() {
  const t = site.tools
  const logos = t.groups.flatMap((g, gi) =>
    g.items.map((name) => ({ node: <ToolPill name={name} color={GROUP_COLORS[gi]} />, title: name, ariaLabel: name })),
  )
  return (
    <section id="tools" aria-label={t.heading} className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[420px] max-w-4xl -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]" />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-mono text-xs tracking-widest text-signal uppercase">{t.label}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{t.intro}</p>
      </div>

      <div className="mt-8 h-[200px] sm:h-[240px]">
        <LogoLoop
          logos={logos}
          layout="arc"
          bend={0.3}
          speed={45}
          logoHeight={48}
          gap={20}
          focus={0.5}
          muted={0.2}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0A0B0D"
          ariaLabel={t.heading}
        />
      </div>

      {/* Readable legend: the same tools, grouped */}
      <div className="mx-auto mt-6 grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {t.groups.map((g, gi) => (
          <div key={g.title} className="border-t border-line pt-5">
            <p className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: GROUP_COLORS[gi] }} />{g.title}
            </p>
            <p className="mt-1 text-sm text-muted">{g.body}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">{g.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
