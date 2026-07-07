import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/global.css'
import SitePage from './components/SitePage.jsx'
import { de } from './content/de.js'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <SitePage t={de} />
  </StrictMode>
)
// Production shells are prerendered → hydrate; dev server has an empty root.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
