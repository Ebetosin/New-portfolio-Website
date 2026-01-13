import React, { useEffect, useState } from 'react';
import ResumeButton from './ResumeButton';
import ThemeToggle from './ThemeToggle';

const sections = ['home', 'about', 'skills', 'experience', 'certifications', 'projects', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <h1 className="brand">
          <a href="/" className="brand-link">
            <span className="brand-accent">E_benn</span>
          </a>
        </h1>

        <div className="nav-center">
          {/* Desktop links */}
          <nav className="nav-links desktop">
            {sections.map((id) => (
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Mobile links */}
          <nav className={`nav-links mobile ${menuOpen ? 'active' : ''}`}>
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
  );
};

export default Navbar;
