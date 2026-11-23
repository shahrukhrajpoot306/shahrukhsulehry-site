import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import DecryptedText from './reactbits/DecryptedText'
import { track, type TrackEvent } from '../lib/track'

/* ------------------------------------------------------------
   Small building blocks reused by every section.
   ------------------------------------------------------------ */

/** Page-width container with the 16px phone gutter. */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

/** A page section with an anchor id and consistent spacing. */
export function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

/** The "01 / The problem" mono label that scrambles into place (React Bits: DecryptedText). */
export function Label({ text }: { text: string }) {
  return (
    <p className="mb-4 font-mono text-xs tracking-widest text-signal uppercase">
      <DecryptedText text={text} animateOn="view" sequential speed={35} encryptedClassName="text-muted" />
    </p>
  )
}

export function Heading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl ${className}`}>
      {children}
    </h2>
  )
}

/** Fades content up once when it scrolls into view. Turns off for reduced-motion users. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

type Variant = 'primary' | 'secondary' | 'ghost'
const styles: Record<Variant, string> = {
  primary: 'bg-signal text-bg hover:brightness-110 shadow-[0_0_32px_-8px_var(--color-signal)]',
  secondary: 'bg-surface text-ink ring-1 ring-line hover:ring-ink/40',
  ghost: 'text-ink ring-1 ring-line hover:ring-ink/40',
}

/** Every call-to-action button. Fires its tracking event on click. */
export function CtaLink({
  href, children, event, variant = 'primary', external = true, download = false, className = '', location = '',
}: {
  href: string; children: ReactNode; event?: TrackEvent; variant?: Variant
  external?: boolean; download?: boolean; className?: string; location?: string
}) {
  return (
    <a
      href={href}
      onClick={() => event && track(event, { location })}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: '' } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

/** Small WhatsApp glyph (inline SVG, no icon library needed). */
export function WaIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zm0-21.6C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 23.9l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4 6.5 0 11.8-5.3 11.8-11.8S18.5.2 12 .2z" />
    </svg>
  )
}

export function Arrow() {
  return <span aria-hidden="true">→</span>
}
