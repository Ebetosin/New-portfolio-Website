import React from 'react'
import ResumeButton from './ResumeButton'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="nav-container">
        <h1 className="brand"><a href="/" className="brand-link"><span className="brand-accent">E_benn</span></a></h1>
        <div className="nav-center">
          <nav className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
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
