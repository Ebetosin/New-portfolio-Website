import React, { useEffect, useState } from 'react'
import ResumeButton from './ResumeButton'
import ThemeToggle from './ThemeToggle'

const sections = ['hero', 'about', 'skills', 'projects', 'contact']

const Navbar = () => {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="site-header">
      <div className="nav-container">
        <h1 className="brand">
          <a href="/" className="brand-link">
            <span className="brand-accent">E_benn</span>
          </a>
        </h1>

        <div className="nav-center">
          <nav className="nav-links">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>

        <div className="nav-right">
          <ThemeToggle />
          <ResumeButton />
        </div>
      </div>
    </header>
  )
}

export default Navbar
