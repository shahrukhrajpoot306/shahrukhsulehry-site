import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { Container } from '../components/ui'

export default function NotFound() {
  useSeo('Page not found | ShahRukh Sulehry', 'This page does not exist.', '/404')
  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="font-mono text-sm text-warn">ERR_404 · destination URL not found</p>
      <h1 className="mt-4 font-display text-4xl font-semibold sm:text-6xl">This link leaks traffic.</h1>
      <p className="mt-4 max-w-md text-muted">Exactly the kind of thing I fix for clients. Let's get you back to a page that converts.</p>
      <Link to="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-signal px-6 text-sm font-semibold text-bg">Go to the home page</Link>
    </Container>
  )
}
