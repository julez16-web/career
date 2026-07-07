export default function Hero({ t }) {
  return (
    <div
      data-section="home"
      id="home"
      className="cw-inner"
      style={{ maxWidth: '1000px', margin: '0 auto', padding: '84px 40px 46px' }}
    >
      <div
        className="cw-hero"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr .85fr',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        <div data-reveal="">
          <div
            style={{
              fontSize: '13px',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#16436e',
              fontWeight: 700,
              marginBottom: '18px',
            }}
          >
            {t.hero.eyebrow}
          </div>
          <h1
            className="cw-h1"
            style={{
              margin: 0,
              fontSize: '58px',
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: '-1.6px',
              color: '#12202d',
            }}
          >
            {t.hero.name}
          </h1>
          <p
            className="cw-lead"
            style={{
              fontFamily: "'Fraunces',Georgia,serif",
              fontSize: '23px',
              lineHeight: 1.4,
              color: '#28323d',
              margin: '22px 0 0',
              fontWeight: 400,
              maxWidth: '470px',
            }}
          >
            {t.hero.lead}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '24px',
              fontSize: '14px',
              color: '#7a8794',
            }}
          >
            <span style={{ color: '#16436e' }}>◆</span> {t.hero.location} &nbsp;·&nbsp; {t.hero.years}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
            <a
              className="cw-btn-primary"
              data-nav="contact"
              href="#contact"
              style={{
                fontSize: '14.5px',
                fontWeight: 700,
                color: '#fff',
                background: '#16436e',
                padding: '14px 26px',
                borderRadius: '9px',
                transition: 'background .2s',
              }}
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              className="cw-btn-ghost"
              href="mailto:julian@zarges.pro"
              style={{
                fontSize: '14.5px',
                fontWeight: 700,
                color: '#16436e',
                background: '#fff',
                border: '1.5px solid #d7dee4',
                padding: '14px 24px',
                borderRadius: '9px',
                transition: 'border-color .2s',
              }}
            >
              {t.hero.ctaEmail}
            </a>
            <a
              className="cw-btn-ghost"
              href="https://www.linkedin.com/in/julian-zarges/"
              target="_blank"
              rel="noopener"
              style={{
                fontSize: '14.5px',
                fontWeight: 700,
                color: '#16436e',
                background: '#fff',
                border: '1.5px solid #d7dee4',
                padding: '14px 24px',
                borderRadius: '9px',
                transition: 'border-color .2s',
              }}
            >
              {t.hero.ctaLinkedin}
            </a>
          </div>
        </div>
        <div
          data-reveal=""
          className="cw-portrait"
          style={{ position: 'relative', justifySelf: 'end' }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '20px -20px -20px 20px',
              background: '#16436e',
              borderRadius: '16px',
            }}
          />
          <img
            src="/assets/portrait.png"
            alt="Julian Zarges"
            style={{
              position: 'relative',
              display: 'block',
              width: '288px',
              height: '368px',
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: '16px',
              boxShadow: '0 18px 44px -12px rgba(18,32,45,.4)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
