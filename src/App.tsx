import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'

// Other pages load only when someone opens them, so the home page stays light.
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const RealEstate = lazy(() => import('./pages/RealEstate'))
const NotFound = lazy(() => import('./pages/NotFound'))

/** The site's pages. Add a new case study by adding it in site.ts (the route below covers it). */
export function AppRoutes() {
  return (
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
  )
}

// PREVIEW builds (private preview link) keep page changes in memory, since the preview host can't use real URLs.
const Router = import.meta.env.VITE_PREVIEW ? MemoryRouter : BrowserRouter

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
