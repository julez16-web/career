import CvRequestForm from './CvRequestForm.jsx'

const iconBadge = {
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  background: 'rgba(255,255,255,.1)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const contactLink = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: '#fff',
  fontSize: '15.5px',
  fontWeight: 600,
}

export default function Contact({ t }) {
  const c = t.contact
  return (
    <div data-section="contact" id="contact" style={{ background: '#12202d' }}>
      <div className="cw-inner" style={{ maxWidth: '1000px', margin: '0 auto', padding: '70px 40px' }}>
        <div
          className="cw-contact"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}
        >
          <div data-reveal="">
            <div
              style={{
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#7fa8cf',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              {c.eyebrow}
            </div>
            <h2
              className="cw-sechead"
              style={{
                margin: 0,
                fontSize: '37px',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-.7px',
                lineHeight: 1.1,
              }}
            >
              {c.heading}
            </h2>
            <p style={{ fontSize: '15.5px', color: '#9fb3c6', lineHeight: 1.6, margin: '20px 0 28px' }}>
              {c.para}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              <a href={'mailto:' + c.email} style={contactLink}>
                <span style={iconBadge}>✉</span>
                {c.email}
              </a>
              <a href={'tel:' + c.phone.replace(/\s/g, '')} style={contactLink}>
                <span style={iconBadge}>☎</span>
                {c.phone}
              </a>
              <a href={c.linkedinUrl} target="_blank" rel="noopener" style={contactLink}>
                <span style={iconBadge}>in</span>
                {c.linkedinLabel}
              </a>
            </div>
          </div>

          <CvRequestForm t={t} />
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.12)',
            marginTop: '54px',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            fontSize: '13px',
            color: '#7d8fa1',
          }}
        >
          <span>{t.footer.copyright}</span>
          <span>
            {t.footer.right}
            <a href="/impressum" style={{ color: '#9fb3c6', textDecoration: 'underline' }}>
              {t.footer.impressum}
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
