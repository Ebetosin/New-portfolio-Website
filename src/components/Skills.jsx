import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import {
  SiFlutter,
  SiNextdotjs,
  SiSpringboot,
  SiStyledcomponents,
  SiTailwindcss,
} from 'react-icons/si'

const BACKEND = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
]

const FRONTEND = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Styled Components', icon: <SiStyledcomponents /> },
  { name: 'Flutter', icon: <SiFlutter /> },
]

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <p className="muted">
          Tools and technologies I use to deliver secure APIs, scalable services, and performant
          frontend experiences.
        </p>

        <div className="skills-grid">
          <article className="skill-group backend">
            <h3>Backend</h3>
            <div className="skill-list">
              {BACKEND.map((s) => (
                <div key={s.name} className="skill-card" title={s.name} aria-label={s.name}>
                  <div className="skill-icon" aria-hidden="true">{s.icon}</div>
                  <div className="skill-name">{s.name}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="skill-group frontend">
            <h3>Frontend</h3>
            <div className="skill-list">
              {FRONTEND.map((s) => (
                <div key={s.name} className="skill-card" title={s.name} aria-label={s.name}>
                  <div className="skill-icon" aria-hidden="true">{s.icon}</div>
                  <div className="skill-name">{s.name}</div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills
