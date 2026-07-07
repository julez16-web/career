export default function Nav({ t }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,.86)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid #eef1f4',
      }}
    >
      <div
        className="cw-inner"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 40px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          data-nav="home"
          href="#home"
          style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '-.3px', color: '#12202d' }}
        >
          {t.nav.brand}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {t.nav.links.map((l) => (
            <a
              key={l.id}
              className="cw-navlink"
              data-nav={l.id}
              href={'#' + l.id}
              style={{ fontSize: '14px', fontWeight: 600, color: '#4a5764' }}
            >
              {l.label}
            </a>
          ))}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '12.5px',
              fontWeight: 700,
              border: '1px solid #d7dee4',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            {/* EN/DE switch — always EN-left, DE-right; current language is the filled chip. */}
            {t.lang === 'en' ? (
              <span style={{ padding: '7px 10px', background: '#16436e', color: '#fff' }}>EN</span>
            ) : (
              <a href="/" style={{ padding: '7px 10px', color: '#16436e' }}>
                EN
              </a>
            )}
            {t.lang === 'de' ? (
              <span style={{ padding: '7px 10px', background: '#16436e', color: '#fff' }}>DE</span>
            ) : (
              <a href="/de" style={{ padding: '7px 10px', color: '#16436e' }}>
                DE
              </a>
            )}
          </div>
          <a
            className="cw-btn-primary"
            data-nav="contact"
            href="#contact"
            style={{
              fontSize: '13.5px',
              fontWeight: 700,
              color: '#fff',
              background: '#16436e',
              padding: '10px 18px',
              borderRadius: '8px',
              transition: 'background .2s',
            }}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </div>
  )
}
