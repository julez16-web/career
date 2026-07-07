// Injects the server-rendered app HTML into the built page shells.
// Runs after `vite build` (client) + `vite build --ssr` (server bundle).
import { readFileSync, writeFileSync } from 'node:fs'
import { render } from '../dist-ssr/entry-server.js'

const pages = [
  ['dist/index.html', 'en'],
  ['dist/de.html', 'de'],
  ['dist/impressum.html', 'impressum'],
]

for (const [file, page] of pages) {
  const shell = readFileSync(file, 'utf8')
  const app = render(page)
  const marker = '<div id="root"></div>'
  if (!shell.includes(marker)) throw new Error(`root marker not found in ${file}`)
  writeFileSync(file, shell.replace(marker, `<div id="root">${app}</div>`))
  console.log(`prerendered ${file} (${(app.length / 1024).toFixed(1)} kB HTML)`)
}
