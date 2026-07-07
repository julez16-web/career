import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import SitePage from './components/SitePage.jsx'
import { de } from './content/de.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SitePage t={de} />
  </StrictMode>
)
