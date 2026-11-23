// Brand marks for the "Tools I use" loop (from the simple-icons set).
// Key = tool name exactly as written in site.tools. Unknown names fall back to initials.
import {
  siGoogleads, siMeta, siLinkedin, siTiktok, siGoogledisplayandvideo360,
  siGoogleanalytics, siGoogletagmanager, siLooker, siWhatsapp, siWordpress, siZapier,
} from 'simple-icons'

type Icon = { path: string; hex: string }
export const toolIcons: Record<string, Icon> = {
  'Google Ads': siGoogleads,
  'Performance Max': siGoogleads,
  'Meta (Facebook & Instagram)': siMeta,
  'LinkedIn Ads': siLinkedin,
  'TikTok Ads': siTiktok,
  DV360: siGoogledisplayandvideo360,
  'Google Analytics 4': siGoogleanalytics,
  'Google Tag Manager': siGoogletagmanager,
  'Meta Conversions API': siMeta,
  'Looker Studio': siLooker,
  'WhatsApp automation': siWhatsapp,
  'Zapier (CRM automation)': siZapier,
  'Email automation': { path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z', hex: 'EA4335' },
  WordPress: siWordpress,
}
