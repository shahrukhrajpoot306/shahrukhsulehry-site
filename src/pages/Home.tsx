import { site } from '../content/site'
import { useSeo } from '../lib/useSeo'
import Hero from '../sections/Hero'
import { Problem, Sectors, Services, Toolkit } from '../sections/Proof'
import { Work } from '../sections/WorkScroll'
import { Deal, Steps, Tools } from '../sections/Process'
import { Experience, Faq, Testimonials } from '../sections/About'
import { Contact } from '../sections/Contact'
import { lazy, Suspense, useEffect, useState } from 'react'

// Animated extras load after the page shows, so the first screen stays fast.
const Statement = lazy(() => import('../designs/blocks').then((m) => ({ default: m.Statement })))

// The home page: sections appear in this order, top to bottom.
export default function Home() {
  useSeo(site.seo.title, site.seo.description, '/')
  // The animated statement is drawn only in the browser (after the page shows), never in the pre-drawn HTML.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <>
      <Hero />
      {mounted ? <Suspense fallback={<div className="h-64" />}><Statement /></Suspense> : <div className="h-64" />}
      <Problem />
      <Services />
      <Toolkit />
      <Work />
      <Experience />
      <Testimonials />
      <Sectors />
      <Steps />
      <Deal />
      <Tools />
      <Faq />
      <Contact />
    </>
  )
}
