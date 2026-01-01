const PROJECTS = [
  {
    name: 'Referral Management System',
    desc: 'Enterprise referral workflow with multi-level approvals, audit trails, role-based access, and real-time status tracking.',
    stack: 'Java • Spring Boot • React • PostgreSQL',
    link: '#'
  },
  {
    name: 'Fixed Asset Management System',
    desc: 'End-to-end asset lifecycle management covering acquisition, depreciation, reassignment, disposal, and audit logging.',
    stack: 'Spring Boot • React • Docker • PostgreSQL',
    link: '#'
  },
  {
    name: 'BVN / NIN Verification Platform',
    desc: 'Secure biometric verification system integrating fingerprint capture, external identity validation, and verification reporting.',
    stack: 'Java • Spring Boot • Biometrics • React',
    link: '#'
  },
  {
    name: 'Referral Management System',
    desc: 'Enterprise referral workflow with multi-level approvals, audit trails, role-based access, and real-time status tracking.',
    stack: 'Java • Spring Boot • React • PostgreSQL',
    link: '#'
  },
  {
    name: 'Fixed Asset Management System',
    desc: 'End-to-end asset lifecycle management covering acquisition, depreciation, reassignment, disposal, and audit logging.',
    stack: 'Spring Boot • React • Docker • PostgreSQL',
    link: '#'
  },
  {
    name: 'BVN / NIN Verification Platform',
    desc: 'Secure biometric verification system integrating fingerprint capture, external identity validation, and verification reporting.',
    stack: 'Java • Spring Boot • Biometrics • React',
    link: '#'
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
                <span className="stack">{project.stack}</span>
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
