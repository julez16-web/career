// CV request submission — sends the request by email via Web3Forms.
// The visitor's email is sent as `email`, so if the Web3Forms Autoresponder
// (a paid feature) is enabled in the dashboard, auto-replies work with no code change.
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_KEY = '2dbbb741-f16e-4c39-9691-52f7ded95db9'
const TO_EMAIL = 'julian@zarges.pro'

function openMailto(data, subject) {
  const body = [
    'Name: ' + data.name,
    'Company: ' + data.company,
    'Email: ' + data.email,
    'Role / reason: ' + data.role,
    'Message: ' + (data.message || '—'),
  ].join('\n')
  window.location.href =
    'mailto:' + TO_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
}

// Returns { errored }. On any real failure it opens the visitor's mail client as
// a fallback and reports errored:true so the UI can show a heads-up — but the
// confirmation is shown either way, mirroring the original flow.
export async function submitCvRequest(data) {
  // Persist locally (best-effort).
  try {
    const key = 'cw_cv_requests'
    const reqs = JSON.parse(localStorage.getItem(key) || '[]')
    reqs.push(Object.assign({ at: new Date().toISOString() }, data))
    localStorage.setItem(key, JSON.stringify(reqs))
  } catch (e) {}

  const subject = 'CV request — ' + data.name + ' (' + data.company + ')'

  // Honeypot: if the hidden checkbox is set, silently treat as spam.
  if (data.botcheck) return { errored: false }

  // No key configured → open the visitor's mail client.
  if (!WEB3FORMS_KEY) {
    openMailto(data, subject)
    return { errored: false }
  }

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject,
        from_name: 'zarges.pro — CV request',
        name: data.name,
        company: data.company,
        email: data.email,
        role: data.role,
        message: data.message || '',
        replyto: data.email,
        botcheck: false,
      }),
    })
    const out = await res.json().catch(() => ({}))
    if (!res.ok || out.success === false) throw new Error('send failed')
    return { errored: false }
  } catch (e) {
    openMailto(data, subject)
    return { errored: true }
  }
}
