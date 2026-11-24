// Build-time only: renders each page to plain HTML so the text shows before
// any JavaScript loads (faster first screen, and Google sees the full page).
// Keep this tree the same shape as AppRoutes in App.tsx.
import { Suspense } from 'react'
import { renderToString } from 'react-dom/server'
import { Route, Routes, StaticRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import RealEstate from './pages/RealEstate'
import NotFound from './pages/NotFound'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <Layout>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </StaticRouter>,
  )
}
