const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>

        <p className="muted">
          I design backend systems and craft frontends with a strong focus on
          clarity, reliability, and scalability.
        </p>

        <div className="cards">
          <div className="card">
            <h3>Java Backend Engineer</h3>
            <p>
              Spring Boot microservices, REST APIs, transactional systems,
              observability, Docker, CI/CD pipelines.
            </p>
          </div>

          <div className="card">
            <h3>React Frontend Developer</h3>
            <p>
              Component-driven SPAs, accessibility-first design, performance
              optimization, maintainable architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
