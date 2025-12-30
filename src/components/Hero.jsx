import React, { useEffect, useState } from 'react'
import picture from '../assets/eben.JPG'
import Snowfall from 'react-snowfall'

const Hero = () => {
  const [bounce, setBounce] = useState(false)
  const [snowColor, setSnowColor] = useState('#ffffff')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setSnowColor(isDark ? '#ffffff' : '#94a3b8') // white on dark, gray on light
  }, [])

  const handleClick = () => {
    setBounce(true)
    setTimeout(() => setBounce(false), 600)
  }

  return (
    <section id="hero" className="hero">
      <Snowfall
        color={snowColor}
        snowflakeCount={120}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div className="container hero-grid">
        <img src={picture} alt="Ebenezer Ojo avatar" className="avatar" />

        <div>
          <h1 className="hero-greeting">
            Hi, I'm{' '}
            <span
              className={`brand-accent hero-name ${bounce ? 'bounce' : ''}`}
              onClick={handleClick}
            >
              Ebenezer Ojo
            </span>
            👋
          </h1>

          <p className="lead">
            I build reliable backend systems using Java and Spring Boot, and craft
            polished, accessible user interfaces with React.
          </p>

          <div className="actions">
            <a href="#projects" className="btn primary">View Work</a>
            <a href="#contact" className="btn ghost">Connect with Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
