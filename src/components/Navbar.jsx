import { useEffect, useState } from 'react'
import ResumeButton from './ResumeButton'
import ThemeToggle from './ThemeToggle'

const sections = ['home', 'about', 'skills', 'experience', 'certifications', 'projects', 'contact']

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollPos = window.scrollY + 180
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      if (nearBottom) {
        setActive('contact')
        return
      }

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const id = sections[i]
        const el = document.getElementById(id)
        if (el && scrollPos >= el.offsetTop) {
          setActive(id)
          return
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="brand-link" aria-label="Go to home section">
          <span className="brand">E_benn<span className="brand-accent">.dev</span></span>
        </a>

        <div className="nav-center">
          <nav className="nav-links desktop" aria-label="Primary navigation">
            {sections.map((id) => (
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            id="mobile-nav"
            className={`nav-links mobile ${menuOpen ? 'active' : ''}`}
            aria-label="Mobile navigation"
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
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
