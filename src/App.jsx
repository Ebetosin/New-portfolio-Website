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
  return (
    <div className="app-root">
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
        <p>
          © {new Date().getFullYear()} Ebenezer Ojo. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
