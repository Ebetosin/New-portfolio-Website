const PROJECTS = [
  {
    name: 'Middleware API for Financial Integrations',
    desc: 'A middleware API for financial integrations, providing secure and scalable communication between banking systems and external services.',
    tags: ['Java', 'Spring Boot', 'REST', 'Swagger-UI'],
    link: 'https://github.com/Ebetosin/middleware-java-api'
  },
  {
    name: 'Guest Management System',
    desc: 'A guest management system for signing in and out guests to keep track of their visits within an organization.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
    link: 'https://github.com/Ebetosin/Guest-java-app'
  },
  {
    name: 'Student Management System',
    desc: 'A containerized student management system for adding and fetching student information with deployment-ready architecture.',
    tags: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL'],
    link: 'https://github.com/Ebetosin/student-app'
  },
  {
    name: 'Spring Security Role-Based App',
    desc: 'A role-based application demonstrating authentication and authorization using Spring Security with different user roles.',
    tags: ['Spring Boot', 'React', 'PostgreSQL'],
    link: 'https://github.com/Ebetosin/Spring-Security-and-role-based-app'
  },
  {
    name: 'Employee Posting Portal',
    desc: 'An employee posting frontend for managing department assignments and updating user information efficiently.',
    tags: ['JavaScript', 'React', 'CSS'],
    link: 'https://github.com/Ebetosin/Employee-posting-portal-frontend'
  },
  {
    name: 'Mini Real Estate Floor Selector',
    desc: 'A real estate floor selection application with intuitive UI for building navigation and payment integration.',
    tags: ['JavaScript', 'React', 'CSS'],
    link: 'https://github.com/Ebetosin/Mini-Real-Estate-Floor-Selector'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="alt">
      <div className="container">
        <h2>Projects</h2>
        <p className="muted">
          Selected projects demonstrating real-world systems, scalability,
          and production-level engineering.
        </p>

        <div className="projects-grid">
          {PROJECTS.map(project => (
            <a
              key={project.name}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className="project-footer">
                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <span className="cta">View →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects