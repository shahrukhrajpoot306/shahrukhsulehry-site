import { useState, type FormEvent } from 'react'
import { site } from '../content/site'
import { bookUrl, hasBooking, mailUrl, telUrl, whatsappUrl } from '../lib/links'
import { track } from '../lib/track'
import { CtaLink, Heading, Label, Section, WaIcon } from '../components/ui'

/**
 * Contact form, sent through Web3Forms (free) to your Gmail.
 * Spam protection: Web3Forms' own hidden "botcheck" honeypot field
 * (checked on Web3Forms' server, so it actually blocks bots).
 */
function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const key = site.form.web3formsKey

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!key) { setState('error'); return }
    setState('sending')
    const data = new FormData(e.currentTarget)
    data.append('access_key', key)
    data.append('subject', 'New enquiry from shahrukhsulehry.com')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) { setState('done'); track('form_submit', { location: 'contact' }); e.currentTarget?.reset() }
      else setState('error')
    } catch { setState('error') }
  }

  if (state === 'done') {
    return (
      <div role="status" className="rounded-2xl border border-signal/40 bg-signal/10 p-8">
        <p className="font-display text-xl font-semibold">✓ {site.form.successMessage}</p>
      </div>
    )
  }

  const field = 'w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus:border-signal focus:outline-none'
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Honeypot: hidden from people, bots fill it in and get rejected by Web3Forms */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">Name<input name="name" required autoComplete="name" className={field} /></label>
        <label className="grid gap-1.5 text-sm">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
      </div>
      <label className="grid gap-1.5 text-sm">Company<input name="company" autoComplete="organization" className={field} /></label>
      <label className="grid gap-1.5 text-sm">Message<textarea name="message" required rows={4} className={field} /></label>
      <button
        type="submit"
        disabled={state === 'sending'}
        className="min-h-12 rounded-full bg-ink px-6 text-sm font-semibold text-bg transition hover:bg-signal disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {state === 'error' && (
        <p role="alert" className="text-sm text-warn">
          The form couldn't send right now. Please message me on WhatsApp or email {site.contact.email}.
        </p>
      )}
    </form>
  )
}

/* 11 — Final CTA + contact */
export function Contact() {
  const c = site.contactSection
  const k = site.contact
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Label text={c.label} />
          <Heading>{c.heading}</Heading>
          <p className="mt-5 max-w-md text-lg text-muted">{c.body}</p>
          <ul className="mt-10 space-y-3 font-mono text-sm">
            <li><a href={telUrl} onClick={() => track('call_click', { location: 'contact' })} className="hover:text-signal">{k.phoneDisplay}</a></li>
            <li><a href={mailUrl} onClick={() => track('email_click', { location: 'contact' })} className="hover:text-signal">{k.email}</a></li>
            <li className="text-muted">{site.location}</li>
            <li className="flex gap-5 pt-2">
              <a href={k.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-signal">LinkedIn ↗</a>
              <a href={k.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-signal">Instagram ↗</a>
            </li>
          </ul>
        </div>
        {/* Two paths: clients go to WhatsApp, employers to the CV and email */}
        <div className="grid gap-4">
          <div className="rounded-3xl border border-signal/40 bg-signal/[0.06] p-6 sm:p-8">
            <p className="font-mono text-xs tracking-widest text-signal uppercase">{c.project.label}</p>
            <p className="mt-3 text-lg text-ink/90">{c.project.body}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaLink href={whatsappUrl} event="whatsapp_click" location="contact"><WaIcon /> {c.project.cta}</CtaLink>
              {hasBooking && <CtaLink href={bookUrl} event="book_call_click" location="contact" variant="secondary">{site.hero.ctaBook}</CtaLink>}
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs tracking-widest text-muted uppercase">{c.employer.label}</p>
            <p className="mt-3 text-lg text-ink/90">{c.employer.body}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <CtaLink href={k.cvUrl} event="cv_download" location="contact" variant="secondary">{c.employer.cta}</CtaLink>
              <a href={mailUrl} onClick={() => track('email_click', { location: 'contact_employer' })} className="font-mono text-sm break-all hover:text-signal">{k.email}</a>
            </div>
          </div>
        </div>
      </div>
      {/* The form only shows once a Web3Forms key is set in site.ts, so nobody hits a broken form */}
      {site.form.web3formsKey && (
        <div className="mt-8 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="mb-6 font-display text-xl font-semibold">{c.formHeading}</h3>
          <ContactForm />
        </div>
      )}
    </Section>
  )
}
