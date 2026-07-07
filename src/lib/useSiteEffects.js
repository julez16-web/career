import { useEffect } from 'react'

// Reproduces the prototype's runtime: scroll-reveal fade-ins, animated metric
// counters, and smooth in-page section navigation. Operates on the live DOM
// after mount so no-JS visitors still see fully rendered, un-hidden content.
export function useSiteEffects() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll('[data-reveal]'))
    reveals.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
      el.style.transition =
        'opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)'
    })
    const counters = Array.from(document.querySelectorAll('[data-count]'))

    const animateCount = (el) => {
      const target = parseFloat(el.getAttribute('data-count'))
      if (isNaN(target)) return
      const dec = parseInt(el.getAttribute('data-decimals') || '0', 10)
      const pre = el.getAttribute('data-prefix') || ''
      const suf = el.getAttribute('data-suffix') || ''
      const num = el.hasAttribute('data-num') ? el : el.querySelector('[data-num]')
      if (!num) return
      const dur = 1500
      const start = performance.now()
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur)
        const e = 1 - Math.pow(1 - t, 3)
        num.textContent = pre + (target * e).toFixed(dec) + suf
        if (t < 1) requestAnimationFrame(step)
        else num.textContent = pre + target.toFixed(dec) + suf
      }
      requestAnimationFrame(step)
    }

    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return
            const t = e.target
            if (t.hasAttribute('data-reveal')) {
              t.style.opacity = '1'
              t.style.transform = 'none'
            }
            if (t.hasAttribute('data-count')) animateCount(t)
            io.unobserve(t)
          })
        },
        { threshold: 0.15 }
      )
      reveals.forEach((el) => io.observe(el))
      counters.forEach((el) => io.observe(el))
    } else {
      reveals.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      counters.forEach((el) => animateCount(el))
    }

    const onNav = (ev) => {
      const a = ev.currentTarget
      ev.preventDefault()
      const id = a.getAttribute('data-nav')
      const tgt = document.querySelector('[data-section="' + id + '"]')
      if (!tgt) return
      const top = id === 'home' ? 0 : tgt.getBoundingClientRect().top + window.scrollY - 74
      window.scrollTo({ top, behavior: 'smooth' })
    }
    const navs = Array.from(document.querySelectorAll('[data-nav]'))
    navs.forEach((a) => a.addEventListener('click', onNav))

    return () => {
      if (io) io.disconnect()
      navs.forEach((a) => a.removeEventListener('click', onNav))
    }
  }, [])
}
