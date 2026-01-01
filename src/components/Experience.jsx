const EXPERIENCE = [
  {
    role: 'Fullstack Developer',
    company: 'Nova Bank',
    period: '2023 - Present',
    desc: 'Developed enterprise banking systems with React frontend and Spring Boot backend, including BVN/NIN verification, asset management, and referral workflows.'
  },
  {
    role: 'Backend Developer',
    company: 'FinTech Solutions',
    period: '2022 - 2023',
    desc: 'Built secure REST APIs, integrated token-based authentication, and implemented logging & audit mechanisms for financial applications.'
  },
  {
    role: 'Frontend Developer',
    company: 'Tech Innovations',
    period: '2021 - 2022',
    desc: 'Designed and developed responsive user interfaces using React, optimized performance, and enhanced accessibility for web applications.'
  },
  {
    role: 'Frontend Developer',
    company: 'Tech Innovations',
    period: '2021 - 2022',
    desc: 'Designed and developed responsive user interfaces using React, optimized performance, and enhanced accessibility for web applications.'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="alt">
      <div className="container">
        <h2>Experience</h2>
        <p className="muted">
          Professional experience highlighting my contributions to real-world systems and production-level applications.
        </p>

        <div className="experience-grid">
          {EXPERIENCE.map(exp => (
            <div key={exp.role + exp.company} className="experience-card">
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
              <p className="desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
