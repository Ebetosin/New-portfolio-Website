import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Snowfall from 'react-snowfall'

// import DebugOverflows from './components/DebugOverflows'

function App() {
  return (
    <div className="app-root">
      {/* <Snowfall
  color="white"
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 9999,
    pointerEvents: 'none'
  }}
/> */}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} . All Right Reserved by E_benn
      </footer>
      {/* dev-only overflow debugger: append ?debug=overflow to URL to enable */}
      {/* {typeof window !== 'undefined' && window.location.search.includes('debug=overflow') ? <DebugOverflows /> : null} */}
    </div> 
  )
}


export default App
