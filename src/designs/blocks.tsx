import { site } from '../content/site'
import ScrollReveal from '../components/reactbits/ScrollReveal'
import { Container } from '../components/ui'

/* ------------------------------------------------------------
   Extra animated blocks (React Bits) used on the home page.
   ------------------------------------------------------------ */

/** Big statement whose words light up as you scroll (React Bits: ScrollReveal). */
export function Statement() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="max-w-4xl">
          {/* Screen readers get the plain sentence; the fading words are visual only */}
          <p className="sr-only">{site.statement.text}</p>
          <div aria-hidden="true">
          <ScrollReveal
            baseOpacity={0.12}
            enableBlur
            blurStrength={6}
            baseRotation={0}
            containerClassName="!my-0"
            textClassName="font-display text-[1.75rem] leading-[1.25] font-semibold tracking-tight text-balance sm:text-5xl"
          >
            {site.statement.text}
          </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
