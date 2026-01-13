import React, { useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css'

function App() {
  const [snowColor, setSnowColor] = useState('#ffffff')

  useEffect(() => {
    const updateSnowColor = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setSnowColor(isDark ? '#ffffff' : '#94a3b8')
    }

    updateSnowColor()

    // optional: react to theme toggle dynamically
    const observer = new MutationObserver(updateSnowColor)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-root">
      {/* ===== GLOBAL SNOW LAYER ===== */}
      <div className="snow-layer">
        <Snowfall
          color={snowColor}
          snowflakeCount={120}
        />
      </div>

      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} · All Rights Reserved · E_benn
      </footer>
    </div>
  )
}

export default App
