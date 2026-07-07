import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const bar = ref.current
    if (!bar) return
    const upd = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? window.scrollY / h : 0
      bar.style.transform = 'scaleX(' + Math.min(1, Math.max(0, p)) + ')'
    }
    window.addEventListener('scroll', upd, { passive: true })
    window.addEventListener('resize', upd)
    upd()
    return () => {
      window.removeEventListener('scroll', upd)
      window.removeEventListener('resize', upd)
    }
  }, [])
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: '100%',
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        background: '#16436e',
        zIndex: 60,
        transition: 'transform .08s linear',
        pointerEvents: 'none',
      }}
    />
  )
}
