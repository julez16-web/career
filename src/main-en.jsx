import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/global.css'
import SitePage from './components/SitePage.jsx'
import { en } from './content/en.js'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <SitePage t={en} />
  </StrictMode>
)
// Production shells are prerendered → hydrate; dev server has an empty root.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
