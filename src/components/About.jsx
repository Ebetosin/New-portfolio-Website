const About = () => {
  return (
    <section id="about" className="alt">
      <div className="container">
        <p className="section-kicker">How I contribute</p>
        <h2>Engineering beyond the feature</h2>
        <p className="muted">
          I build production software end-to-end, from API design and data modeling to intuitive,
          accessible user interfaces.
        </p>

        <div className="cards">
          <CardSpotlight className="card bento-card bento-large">
            <h3>Backend Engineering</h3>
            <p>
              Java and Spring Boot services with clean layering, defensive API design, secure
              authentication, auditability, and integration boundaries built for change.
            </p>
          </CardSpotlight>

          <CardSpotlight className="card bento-card">
            <h3>Frontend Engineering</h3>
            <p>
              React applications focused on usability, WCAG-aware interaction, responsive
              behaviour, and maintainable component architecture.
            </p>
          </CardSpotlight>

          <CardSpotlight className="card bento-card">
            <h3>Execution Style</h3>
            <p>
              I work from clear requirements through implementation, review, testing and release,
              communicating trade-offs and keeping delivery quality visible.
            </p>
          </CardSpotlight>
        </div>
      </div>
    </section>
  )
}

export default About
import { CardSpotlight } from './ui/Aceternity'
