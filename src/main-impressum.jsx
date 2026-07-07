import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/global.css'
import Impressum from './components/Impressum.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <Impressum />
  </StrictMode>
)
// Production shells are prerendered → hydrate; dev server has an empty root.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
