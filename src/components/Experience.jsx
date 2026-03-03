const EXPERIENCE = [
  {
    role: 'Backend Developer',
    company: 'Nova Bank',
    period: '2024 - Present',
    desc: 'Built enterprise banking capabilities in Spring Boot, including identity verification workflows, asset lifecycle modules, and middleware APIs with secure integration patterns.',
    impact: [
      'Delivered integration endpoints for BVN/NIN verification and referral workflows.',
      'Improved backend reliability through cleaner service boundaries and defensive API design.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2023 - Present',
    desc: 'Delivered production web platforms with React frontends and Java backends, implementing token-based access control, audit logging, and maintainable service boundaries.',
    impact: [
      'Shipped end-to-end features from data model to UI with consistent delivery quality.',
      'Implemented authentication and audit logging patterns used across multiple client builds.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'KDN Plus',
    period: '2024 - 2025',
    desc: 'Developed responsive React and Next.js interfaces, improved accessibility, and reduced UI friction across desktop and mobile workflows.',
    impact: [
      'Improved accessibility and interaction clarity for key user journeys.',
      'Standardized reusable UI components to speed up future feature delivery.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Federal University of Agriculture Abeokuta',
    period: '2023 - 2024',
    desc: 'Built full-stack web applications with emphasis on performance optimization, clear UX flows, and maintainable front-to-back integration.',
    impact: [
      'Built and maintained full-stack modules with stable API-to-UI integration.',
      'Reduced technical debt by improving code structure and maintainability.',
    ],
  },
  {
    role: 'Frontend Intern',
    company: 'Side Hustle (Terra HQ)',
    period: '2021',
    desc: 'Collaborated on accessible, responsive frontend features and strengthened core engineering practices in delivery quality and UI consistency.',
    impact: [
      'Contributed production-ready UI features in a collaborative team environment.',
      'Strengthened testing and implementation discipline for frontend work.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="alt">
      <div className="container">
        <h2>Experience</h2>
        <p className="muted">
          Roles where I delivered software outcomes across backend systems and customer-facing web
          applications.
        </p>

        <div className="experience-grid">
          {EXPERIENCE.map((exp) => (
            <article key={`${exp.role}-${exp.company}`} className="experience-card">
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
              <p className="desc">{exp.desc}</p>
              <ul className="impact-list">
                {exp.impact.map((point) => (
                  <li key={`${exp.role}-${point}`}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
