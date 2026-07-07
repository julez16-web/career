const eyebrow = {
  fontSize: '13px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#16436e',
  fontWeight: 700,
}

export default function Expertise({ t }) {
  return (
    <div data-section="expertise" id="expertise" style={{ background: '#f5f7f9', marginTop: '60px' }}>
      <div className="cw-inner" style={{ maxWidth: '1000px', margin: '0 auto', padding: '66px 40px' }}>
        <div style={{ ...eyebrow, marginBottom: '30px' }}>{t.expertise.eyebrow}</div>
        <div
          data-reveal=""
          className="cw-cards"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }}
        >
          {t.expertise.cards.map((c, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid #e6eaee',
                borderRadius: '12px',
                padding: '24px 26px',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#16436e', marginBottom: '9px' }}>
                {c.title}
              </div>
              <div style={{ fontSize: '14px', color: '#4a5764', lineHeight: 1.55 }}>{c.body}</div>
            </div>
          ))}
        </div>

        <div
          data-reveal=""
          className="cw-edulang"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '44px',
            marginTop: '44px',
          }}
        >
          <div>
            <div style={{ ...eyebrow, marginBottom: '20px' }}>{t.education.eyebrow}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {t.education.items.map((ed, i) => (
                <div key={i}>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#16436e' }}>{ed.date}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#12202d' }}>
                    {ed.title}
                    {ed.note ? (
                      <span style={{ fontWeight: 400, color: '#7a8794' }}> {ed.note}</span>
                    ) : null}
                  </div>
                  <div style={{ fontSize: '14px', color: '#5a6773' }}>{ed.school}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ ...eyebrow, marginBottom: '20px' }}>{t.languages.eyebrow}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {t.languages.items.map((lng, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '14.5px',
                      marginBottom: '7px',
                    }}
                  >
                    <span style={{ fontWeight: 700, color: '#12202d' }}>{lng.name}</span>
                    <span style={{ color: '#7a8794' }}>{lng.level}</span>
                  </div>
                  <div style={{ height: '6px', background: '#e0e6ec', borderRadius: '4px' }}>
                    <div
                      style={{
                        width: lng.pct + '%',
                        height: '100%',
                        background: '#16436e',
                        borderRadius: '4px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
