const About = () => {
  return (
    <section id="about" className="alt">
      <div className="container">
        <h2>About</h2>
        <p className="muted">
          I build production software end-to-end, from API design and data modeling to intuitive,
          accessible user interfaces.
        </p>

        <div className="cards">
          <article className="card">
            <h3>Backend Engineering</h3>
            <p>
              Java and Spring Boot services with clean layering, secure authentication,
              observability, and reliable deployment workflows.
            </p>
          </article>

          <article className="card">
            <h3>Frontend Engineering</h3>
            <p>
              React applications focused on usability, accessibility, and maintainable component
              architecture for long-term iteration.
            </p>
          </article>

          <article className="card">
            <h3>Execution Style</h3>
            <p>
              I prioritize clear requirements, measurable outcomes, and stable delivery quality
              across the software lifecycle.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
