import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import SitePage from './components/SitePage.jsx'
import { en } from './content/en.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SitePage t={en} />
  </StrictMode>
)
