import { renderToString } from 'react-dom/server'
import SitePage from './components/SitePage.jsx'
import Impressum from './components/Impressum.jsx'
import { en } from './content/en.js'
import { de } from './content/de.js'

// Build-time prerendering entry: returns the full app HTML for a page so the
// static shells ship real content (bots/no-JS see everything); the client
// bundle then hydrates it.
export function render(page) {
  if (page === 'impressum') return renderToString(<Impressum />)
  return renderToString(<SitePage t={page === 'de' ? de : en} />)
}
