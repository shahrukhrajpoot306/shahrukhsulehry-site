import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { design } from './lib/design'

document.documentElement.dataset.design = design

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
// Live pages arrive already drawn (see scripts/postbuild.mjs), so React just attaches to them.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
