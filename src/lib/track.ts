/**
 * Tracking helper. Every button calls track('event_name').
 * Events go into Google Tag Manager's dataLayer, where GA4 / Meta Pixel
 * tags pick them up. Nothing is hard-coded to GA4 or Meta here on purpose:
 * you manage those inside GTM without touching code.
 */
type DL = Record<string, unknown>[]
declare global { interface Window { dataLayer?: DL } }

export type TrackEvent =
  | 'whatsapp_click' | 'call_click' | 'email_click' | 'book_call_click'
  | 'form_submit' | 'cv_download' | 'scroll_depth' | 'case_study_click'

export function track(event: TrackEvent, params: DL[number] = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

/** Fires scroll_depth once each at 25 / 50 / 75 / 90 % of the page. */
export function initScrollDepth() {
  const marks = [25, 50, 75, 90]
  const fired = new Set<number>()
  const onScroll = () => {
    const h = document.documentElement
    const pct = ((h.scrollTop + window.innerHeight) / h.scrollHeight) * 100
    for (const m of marks) {
      if (pct >= m && !fired.has(m)) { fired.add(m); track('scroll_depth', { percent: m, page: location.pathname }) }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}
