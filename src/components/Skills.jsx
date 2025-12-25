import React from 'react'
import { FaJava, FaAws, FaNodeJs, FaHtml5, FaCss3Alt, FaReact, FaDocker } from 'react-icons/fa'
import { SiSpringboot, SiTailwindcss, SiStyledcomponents, SiNextdotjs } from 'react-icons/si'

const BACKEND = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
]

const FRONTEND = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Styled Components', icon: <SiStyledcomponents /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
]

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills & Technologies</h2>

        <div className="skills-grid">
          {/* Backend on the left */}
          <div className="skill-group backend">
            <h3>Backend</h3>
            <div className="skill-list">
              {BACKEND.map((s) => (
                <div key={s.name} className="skill-card" title={s.name} aria-label={s.name}>
                  <div className="skill-icon">{s.icon}</div>
                  <div className="skill-name">{s.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend on the right */}
          <div className="skill-group frontend">
            <h3>Frontend</h3>
            <div className="skill-list">
              {FRONTEND.map((s) => (
                <div key={s.name} className="skill-card" title={s.name} aria-label={s.name}>
                  <div className="skill-icon">{s.icon}</div>
                  <div className="skill-name">{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
