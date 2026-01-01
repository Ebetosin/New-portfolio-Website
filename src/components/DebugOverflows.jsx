// import { useEffect } from 'react'

// export default function DebugOverflows() {
//   useEffect(() => {
//     const els = Array.from(document.querySelectorAll('*'))
//     const over = []
//     els.forEach((el) => {
//       const r = el.getBoundingClientRect()
//       if (r.right > window.innerWidth - 1 || r.left < -1) {
//         over.push({ el, rect: r })
//         el.style.outline = '3px solid rgba(255,0,0,0.9)'
//         el.style.outlineOffset = '-2px'
//       }
//     })

//     if (over.length) {
//       console.warn('[DebugOverflows] found elements that overflow the viewport:', over.map(o => ({ tag: o.el.tagName, cls: o.el.className, rect: o.rect })))
//       // remove outlines after 6s
//       setTimeout(() => over.forEach(o => { o.el.style.outline = ''; o.el.style.outlineOffset = '' }), 6000)
//     } else {
//       console.info('[DebugOverflows] no overflows found')
//     }
//   }, [])

//   return null
// }
