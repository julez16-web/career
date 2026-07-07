export default function MetricStrip({ t }) {
  return (
    <div style={{ background: '#12202d' }}>
      <div
        className="cw-inner cw-metrics"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '46px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '26px',
        }}
      >
        {t.metrics.map((m, i) => (
          <div
            key={i}
            data-count={m.count}
            {...(m.prefix ? { 'data-prefix': m.prefix } : {})}
            {...(m.suffix ? { 'data-suffix': m.suffix } : {})}
            {...(m.decimals ? { 'data-decimals': m.decimals } : {})}
            style={{ borderLeft: '2px solid rgba(255,255,255,.16)', paddingLeft: '20px' }}
          >
            <div
              data-num=""
              style={{
                fontSize: '44px',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-1px',
                lineHeight: 1,
              }}
            >
              {m.display}
            </div>
            <div
              style={{ fontSize: '13px', color: '#9fb3c6', marginTop: '7px', lineHeight: 1.35 }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
