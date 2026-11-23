import { site } from '../content/site'

const c = site.contact
export const whatsappUrl = `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(c.whatsappMessage)}`
export const telUrl = `tel:${c.phoneLink}`
export const mailUrl = `mailto:${c.email}`
/** If no booking link is set yet, "Book a call" falls back to WhatsApp. */
export const bookUrl = c.bookingUrl || whatsappUrl
/** True once a real booking link is set. Until then the Book buttons are hidden. */
export const hasBooking = Boolean(c.bookingUrl)
/** WhatsApp link with a custom first message (e.g. per service package). */
export const waLink = (text: string) => `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(text)}`
