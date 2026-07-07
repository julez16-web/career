export default function Profile({ t }) {
  return (
    <div
      data-section="profile"
      id="profile"
      className="cw-inner"
      style={{ maxWidth: '1000px', margin: '0 auto', padding: '72px 40px 24px' }}
    >
      <div
        data-reveal=""
        className="cw-profile"
        style={{
          display: 'grid',
          gridTemplateColumns: '210px 1fr',
          gap: '44px',
          alignItems: 'start',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#16436e',
            fontWeight: 700,
            paddingTop: '8px',
          }}
        >
          {t.profile.eyebrow}
        </div>
        <div>
          <p
            style={{
              margin: 0,
              fontSize: '20px',
              lineHeight: 1.6,
              color: '#28323d',
              fontWeight: 400,
              textWrap: 'pretty',
            }}
          >
            {t.profile.paragraphs[0]}
          </p>
          <p
            style={{
              margin: '18px 0 0',
              fontSize: '15.5px',
              lineHeight: 1.65,
              color: '#4a5764',
              textWrap: 'pretty',
            }}
          >
            {t.profile.paragraphs[1]}
          </p>
        </div>
      </div>
    </div>
  )
}
