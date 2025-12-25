const PROJECTS = [
  {
    name: 'Referral Management System',
    desc: 'Multi-stage approval workflow with audit logs',
    link: '#'
  },
  {
    name: 'Fixed Asset Management',
    desc: 'Enterprise asset lifecycle & depreciation system',
    link: '#'
  },
  {
    name: 'BVN / NIN Verification',
    desc: 'Biometric verification platform with Spring Boot',
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="alt">
      <div className="container">
        <h2>Projects</h2>

        <div className="grid">
          {PROJECTS.map(p => (
            <a key={p.name} href={p.link} className="project">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span>View →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
