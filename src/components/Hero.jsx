import React, { useState } from 'react'
import profile from '../assets/profile.svg'

const Hero = () => {
  const [bounce, setBounce] = useState(false)

  const handleClick = () => {
    setBounce(true)
    // Reset the animation after it finishes (duration 0.6s)
    setTimeout(() => setBounce(false), 600)
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <img src={profile} alt="Ebenezer Ojo avatar" className="avatar" />

        <div>
          <h1 className="hero-greeting">
            Hi, I'm{' '}
            <span
              className={`brand-accent hero-name ${bounce ? 'bounce' : ''}`}
              onClick={handleClick}
            >
              Ebenezer Ojo
            </span>
            <span className="wave" role="img" aria-label="waving hand">
              👋
            </span>
          </h1>

          <p className="lead">
            I build reliable backend systems with Java & Spring Boot and craft
            polished, accessible user interfaces with React.
          </p>

          <div className="actions">
            <a href="#projects" className="btn primary">
              View Work
            </a>
            <a href="#contact" className="btn ghost">
              Connect with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
