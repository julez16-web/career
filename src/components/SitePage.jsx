import ScrollProgress from './ScrollProgress.jsx'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import MetricStrip from './MetricStrip.jsx'
import Profile from './Profile.jsx'
import Experience from './Experience.jsx'
import Expertise from './Expertise.jsx'
import Contact from './Contact.jsx'
import { useSiteEffects } from '../lib/useSiteEffects.js'

// One page, driven by a language content object (en or de).
export default function SitePage({ t }) {
  useSiteEffects()
  return (
    <div id="cw-page" style={{ fontFamily: "'Source Sans 3',system-ui,sans-serif", color: '#1a2733' }}>
      <ScrollProgress />
      <Nav t={t} />
      <Hero t={t} />
      <MetricStrip t={t} />
      <Profile t={t} />
      <Experience t={t} />
      <Expertise t={t} />
      <Contact t={t} />
    </div>
  )
}
