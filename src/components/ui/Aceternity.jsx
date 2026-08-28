import { useRef } from 'react'

export const Spotlight = ({ className = '' }) => (
  <svg className={`aceternity-spotlight ${className}`} viewBox="0 0 3787 2842" fill="none" aria-hidden="true">
    <g filter="url(#spotlight-blur)">
      <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="white" fillOpacity="0.22" />
    </g>
    <defs><filter id="spotlight-blur" x="0" y="0" width="3787" height="2842" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="151" /></filter></defs>
  </svg>
)

export const BackgroundBeams = () => (
  <div className="background-beams" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((beam) => <i key={beam} style={{ '--beam': beam }} />)}
  </div>
)

export const MovingBorder = ({ children, className = '', href, ...props }) => {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag href={href} className={`moving-border ${className}`} {...props}>
      <span className="moving-border-runner" aria-hidden="true" />
      <span className="moving-border-content">{children}</span>
    </Tag>
  )
}

export const CardSpotlight = ({ children, className = '', as = 'article', ...props }) => {
  const ref = useRef(null)
  const Tag = as
  const onPointerMove = (event) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    ref.current.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    ref.current.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
  }
  return <Tag ref={ref} onPointerMove={onPointerMove} className={`card-spotlight ${className}`} {...props}>{children}</Tag>
}

export const InfiniteMovingCards = ({ items }) => (
  <div className="moving-cards" aria-label="Technology stack">
    <div className="moving-cards-track">
      {[...items, ...items].map((item, index) => (
        <div className="moving-skill" key={`${item.name}-${index}`} aria-hidden={index >= items.length}>
          <span>{item.icon}</span>{item.name}
        </div>
      ))}
    </div>
  </div>
)
