import Rich from './Rich.jsx'

const dot = {
  position: 'absolute',
  left: '-36px',
  top: '5px',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: '#16436e',
  boxShadow: '0 0 0 4px #fff,0 0 0 6px #dde6ee',
}
const dateLine = { fontSize: '13px', fontWeight: 700, color: '#16436e', letterSpacing: '.3px' }
const jobTitle = {
  margin: '5px 0 2px',
  fontSize: '22px',
  fontWeight: 800,
  color: '#12202d',
  letterSpacing: '-.3px',
}
const company = { fontSize: '14.5px', color: '#16436e', fontWeight: 600, marginBottom: '11px' }
const bulletDot = {
  flex: '0 0 auto',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#16436e',
  marginTop: '9px',
}

function Job({ job }) {
  return (
    <div data-reveal="" style={{ position: 'relative', marginBottom: '38px' }}>
      <div style={dot} />
      <div style={dateLine}>
        {job.date}
        {' · '}
        {job.location}
      </div>
      <Rich as="h3" className="cw-job" style={jobTitle} html={job.title} />
      <div style={company}>{job.company}</div>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {job.bullets.map((b, i) => (
          <li
            key={i}
            style={{ display: 'flex', gap: '11px', fontSize: '15px', color: '#2c3742', lineHeight: 1.5 }}
          >
            <span style={bulletDot} />
            <Rich html={b} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience({ t }) {
  const e = t.experience
  return (
    <div
      data-section="work"
      id="work"
      className="cw-inner"
      style={{ maxWidth: '1000px', margin: '0 auto', padding: '56px 40px 24px' }}
    >
      <div
        style={{
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#16436e',
          fontWeight: 700,
          marginBottom: '16px',
        }}
      >
        {e.eyebrow}
      </div>
      <p
        data-reveal=""
        style={{
          margin: '0 0 34px',
          fontSize: '17px',
          lineHeight: 1.55,
          color: '#28323d',
          fontWeight: 400,
          maxWidth: '770px',
          textWrap: 'pretty',
        }}
      >
        {e.intro}
      </p>
      <div style={{ position: 'relative', paddingLeft: '36px' }}>
        <div
          style={{
            position: 'absolute',
            left: '5px',
            top: '6px',
            bottom: '44px',
            width: '2px',
            background: 'linear-gradient(#16436e,#dde2e8)',
          }}
        />
        {e.jobs.map((job, i) => (
          <Job key={i} job={job} />
        ))}

        {/* Earlier positions (muted) */}
        <div data-reveal="" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: '-36px',
              top: '5px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#7a8794',
              boxShadow: '0 0 0 4px #fff,0 0 0 6px #e6eaee',
            }}
          />
          <div style={{ ...dateLine, color: '#7a8794' }}>
            {e.earlier.date}
            {' · '}
            {e.earlier.location}
          </div>
          <h3
            style={{
              margin: '5px 0 2px',
              fontSize: '19px',
              fontWeight: 700,
              color: '#12202d',
              letterSpacing: '-.3px',
            }}
          >
            {e.earlier.title}
          </h3>
          <Rich
            style={{ fontSize: '15px', color: '#4a5764', lineHeight: 1.5 }}
            as="div"
            html={e.earlier.body}
          />
        </div>
      </div>
    </div>
  )
}
