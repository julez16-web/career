import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import Impressum from './components/Impressum.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Impressum />
  </StrictMode>
)
