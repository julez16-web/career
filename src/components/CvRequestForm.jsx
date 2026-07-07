import { useRef, useState } from 'react'
import { submitCvRequest } from '../lib/submitCvRequest.js'

const inputStyle = {
  fontFamily: 'inherit',
  fontSize: '14.5px',
  padding: '13px 15px',
  border: '1.5px solid #dde2e8',
  borderRadius: '9px',
  outline: 'none',
  color: '#12202d',
}

export default function CvRequestForm({ t }) {
  const f = t.form
  const formRef = useRef(null)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [firstName, setFirstName] = useState('')

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const form = formRef.current
    const data = {}
    form.querySelectorAll('input, textarea').forEach((i) => {
      data[i.name] = i.type === 'checkbox' ? i.checked : (i.value || '').trim()
    })
    if (!data.name || !data.company || !data.email || !data.role) {
      setError(f.errRequired)
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
      setError(f.errEmail)
      return
    }
    setError('')
    setFirstName(data.name.split(' ')[0])
    setSending(true)
    const res = await submitCvRequest(data)
    setSending(false)
    if (res.errored) setError(f.errSend)
    setSuccess(true)
  }

  return (
    <div data-reveal="" style={{ background: '#fff', borderRadius: '16px', padding: '32px 32px 36px' }}>
      <div style={{ fontSize: '18px', fontWeight: 800, color: '#12202d' }}>{f.title}</div>
      <p style={{ fontSize: '13.5px', color: '#7a8794', lineHeight: 1.5, margin: '6px 0 22px' }}>
        {f.intro}
      </p>

      {!success && (
        <form ref={formRef} onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
          />
          <input required name="name" placeholder={f.name} style={inputStyle} />
          <input required name="company" placeholder={f.company} style={inputStyle} />
          <input required type="email" name="email" placeholder={f.email} style={inputStyle} />
          <input required name="role" placeholder={f.role} style={inputStyle} />
          <textarea
            name="message"
            rows={3}
            placeholder={f.message}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <button
            type="submit"
            disabled={sending}
            className="cw-btn-primary"
            style={{
              fontFamily: 'inherit',
              fontSize: '15px',
              fontWeight: 700,
              color: '#fff',
              background: '#16436e',
              border: 'none',
              padding: '15px',
              borderRadius: '9px',
              cursor: 'pointer',
              marginTop: '4px',
              transition: 'background .2s',
            }}
          >
            {sending ? f.sending : f.submit}
          </button>
          {error ? (
            <div style={{ fontSize: '13px', color: '#d14343', fontWeight: 600 }}>{error}</div>
          ) : null}
          <div style={{ fontSize: '11.5px', color: '#a9b2bb', lineHeight: 1.45, marginTop: '2px' }}>
            {f.privacy}
          </div>
        </form>
      )}

      {success && (
        <div style={{ textAlign: 'center', padding: '14px 4px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#eaf3ec',
              color: '#2e8b57',
              fontSize: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
            }}
          >
            ✓
          </div>
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#12202d', marginBottom: '6px' }}>
            {firstName ? f.thanks + ', ' + firstName + '!' : f.thanks + '!'}
          </div>
          <p style={{ fontSize: '14px', color: '#5a6773', lineHeight: 1.6, margin: 0 }}>{f.successMsg}</p>
        </div>
      )}
    </div>
  )
}
