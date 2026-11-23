import { site } from '../content/site'
import { whatsappUrl } from '../lib/links'
import { track } from '../lib/track'
import StarBorder from './reactbits/StarBorder'
import { WaIcon } from './ui'

/** WhatsApp button with a travelling light around its border (React Bits: StarBorder). */
export default function StarWhatsApp({ location, label = site.hero.ctaWhatsapp, className = '' }: { location: string; label?: string; className?: string }) {
  return (
    <StarBorder
      as="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('whatsapp_click', { location })}
      color="#ffffff"
      radius={999}
      stars={2}
      duration={3.5}
      backgroundColor="#3DDC84"
      textColor="#0A0B0D"
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold ${className}`}
    >
      <WaIcon /> {label}
    </StarBorder>
  )
}
