import { useEffect, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../content/site'
import { telUrl, whatsappUrl } from '../lib/links'
import { initScrollDepth, track } from '../lib/track'
import { Container, WaIcon } from './ui'

/** Page links (no #) use the router; section links (/#work) stay normal links. */
function NavItem({ href, label }: { href: string; label: string }) {
  return href.includes('#')
    ? <a href={href} className="hover:text-ink">{label}</a>
    : <Link to={href} className="hover:text-ink">{label}</Link>
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/75 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          ShahRukh Sulehry<span className="text-signal">.</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-muted sm:flex">
            {site.nav.map((n) => (
              <li key={n.href}><NavItem href={n.href} label={n.label} /></li>
            ))}
          </ul>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp_click', { location: 'header' })}
            className="hidden min-h-10 items-center gap-2 rounded-full bg-signal px-4 text-sm font-semibold text-bg sm:inline-flex"
          >
            <WaIcon /> <span>{site.hero.ctaWhatsapp}</span>
          </a>
        </nav>
      </Container>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line pt-12 pb-28 sm:pb-12">
      <Container className="flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-ink">{site.name}</p>
          <p>{site.footer.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {site.nav.map((n) => <li key={n.href}><NavItem href={n.href} label={n.label} /></li>)}
          <li><a href={site.contact.cvUrl} onClick={() => track('cv_download', { location: 'footer' })} className="hover:text-ink">CV</a></li>
          <li><a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a></li>
          <li><a href={site.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Instagram</a></li>
        </ul>
        <p suppressHydrationWarning>© {new Date().getFullYear()} {site.name}</p>
      </Container>
    </footer>
  )
}

/** Phone-only sticky bar: WhatsApp + Call always within thumb reach. */
function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-bg/90 p-3 backdrop-blur-md sm:hidden">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { location: 'mobile_bar' })}
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-signal text-sm font-semibold text-bg">
        <WaIcon /> WhatsApp
      </a>
      <a href={telUrl} onClick={() => track('call_click', { location: 'mobile_bar' })}
        className="flex min-h-12 items-center justify-center rounded-full text-sm font-semibold ring-1 ring-line">
        Call
      </a>
    </div>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()
  useEffect(() => initScrollDepth(), [])
  // Scroll to top on page change (or to the #section if the link has one)
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileBar />
    </>
  )
}
