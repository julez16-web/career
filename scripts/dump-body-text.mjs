// Dumps the site's body copy (EN + DE) as markdown — for copy review.
import { en } from '../src/content/en.js'
import { de } from '../src/content/de.js'

const strip = (s) =>
  s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()

function dump(t, title) {
  const L = []
  L.push(`# ${title}`)
  L.push(`\n## Hero`)
  L.push(`Eyebrow: ${t.hero.eyebrow}`)
  L.push(`Lead: ${t.hero.lead}`)
  L.push(`Meta-Zeile: ${t.hero.location} · ${t.hero.years}`)
  L.push(`\n## Kennzahlleiste`)
  t.metrics.forEach((m) => L.push(`- **${m.display}** — ${m.label}`))
  L.push(`\n## Profil`)
  t.profile.paragraphs.forEach((p) => L.push(`\n${strip(p)}`))
  L.push(`\n## Werdegang — Intro`)
  L.push(strip(t.experience.intro))
  t.experience.jobs.forEach((j) => {
    L.push(`\n### ${strip(j.title)}`)
    L.push(`${j.date} · ${j.location}`)
    L.push(`${strip(j.company)}`)
    j.bullets.forEach((b) => L.push(`- ${strip(b)}`))
  })
  L.push(`\n### ${t.experience.earlier.title} (${t.experience.earlier.date})`)
  L.push(strip(t.experience.earlier.body))
  L.push(`\n## Kernkompetenzen`)
  t.expertise.cards.forEach((c) => L.push(`- **${c.title}**: ${c.body}`))
  L.push(`\n## Ausbildung`)
  t.education.items.forEach((e) => L.push(`- ${e.date} — ${e.title}${e.note ? ' ' + e.note : ''} · ${e.school}`))
  L.push(`\n## Kontakt`)
  L.push(`Headline: ${t.contact.heading}`)
  L.push(`\n${t.contact.para}`)
  L.push(`\n## CV-Request-Formular`)
  L.push(`Titel: ${t.form.title}`)
  L.push(`Intro: ${t.form.intro}`)
  return L.join('\n')
}

console.log(dump(en, 'zarges.pro — Body-Text (EN)'))
console.log('\n\n---\n\n')
console.log(dump(de, 'zarges.pro — Body-Text (DE)'))
