const PROJECTS = [
  {
    name: 'Middleware API for Financial Integrations',
    desc: 'Secure middleware service enabling reliable communication between banking systems and third-party providers.',
    impact: 'Standardized external integrations through documented REST contracts and secure request handling.',
    tags: ['Java', 'Spring Boot', 'REST API', 'Swagger'],
    link: 'https://github.com/Ebetosin/middleware-java-api',
  },
  {
    name: 'Spring Security Role-Based App',
    desc: 'Reference implementation of authentication and authorization with role-aware access control patterns.',
    impact: 'Demonstrated robust role-based authorization flow aligned with production security practices.',
    tags: ['Java', 'Spring Security', 'PostgreSQL'],
    link: 'https://github.com/Ebetosin/Spring-Security-and-role-based-app',
  },
  {
    name: 'Student Management System',
    desc: 'Containerized student records system designed for deployment-ready environments and maintainable operations.',
    impact: 'Packaged backend and database dependencies with Docker for consistent local-to-deployment setup.',
    tags: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL'],
    link: 'https://github.com/Ebetosin/student-app',
  },
  {
    name: 'Guest Management System',
    desc: 'Guest sign-in and visit tracking platform with persistent records and operational reporting support.',
    impact: 'Enabled traceable visitor records with persistent storage and clear operational workflows.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
    link: 'https://github.com/Ebetosin/Guest-java-app',
  },
  {
    name: 'Employee Posting Portal',
    desc: 'Frontend portal for managing department postings and profile updates through a clear workflow-driven UI.',
    impact: 'Improved usability with clearer interaction flow and reusable component patterns.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/Ebetosin/Employee-posting-portal-frontend',
  },
  {
    name: 'Mini Real Estate Floor Selector',
    desc: 'Interactive property browsing experience with floor-level navigation and guided action points.',
    impact: 'Built a visually guided browsing flow that simplified user decision making.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/Ebetosin/Mini-Real-Estate-Floor-Selector',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="alt">
      <div className="container">
        <p className="section-kicker">Selected engineering work</p>
        <h2>Systems, security and delivery</h2>
        <p className="muted">
          Most recruiter-relevant work first, focused on backend architecture, security, and
          production delivery.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <CardSpotlight
              key={project.name}
              href={project.link}
              as="a"
              className="project-card project-3d-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open project: ${project.name}`}
            >
              <h3>{project.name}</h3>
              <p className="desc">{project.desc}</p>
              <p className="project-impact"><strong>Engineering focus:</strong> {project.impact}</p>
              <div className="project-footer">
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={`${project.name}-${tag}`} className="tag">{tag}</span>
                  ))}
                </div>
                <span className="cta">Open Repo</span>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
import { CardSpotlight } from './ui/Aceternity'
