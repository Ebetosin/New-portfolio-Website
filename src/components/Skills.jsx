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
  SiGithubactions,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSpringboot,
  SiStyledcomponents,
  SiTailwindcss,
} from 'react-icons/si'
import { InfiniteMovingCards } from './ui/Aceternity'

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

const ENGINEERING = [
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Redis', icon: <SiRedis /> },
  { name: 'CI/CD', icon: <SiGithubactions /> },
  { name: 'Containerisation', icon: <FaDocker /> },
  { name: 'Cloud delivery', icon: <FaAws /> },
]

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-kicker">Technical toolkit</p>
        <h2>Built for production, not just demos</h2>
        <p className="muted">
          Tools and technologies I use to deliver secure APIs, scalable services, and performant
          frontend experiences.
        </p>

        <InfiniteMovingCards items={[...BACKEND, ...FRONTEND, ...ENGINEERING]} />

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

          <article className="skill-group engineering-practice">
            <h3>Data, cloud &amp; delivery</h3>
            <div className="skill-list">
              {ENGINEERING.map((s) => (
                <div key={s.name} className="skill-card" title={s.name} aria-label={s.name}>
                  <div className="skill-icon" aria-hidden="true">{s.icon}</div>
                  <div className="skill-name">{s.name}</div>
                </div>
              ))}
            </div>
            <p className="practice-note">API design • Authentication • Audit logging • Code review • Responsive UI • Accessible interaction</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills
