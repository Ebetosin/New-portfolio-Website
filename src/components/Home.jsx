import picture from '../assets/Ebenn-optimized.jpg'
import { BackgroundBeams, MovingBorder, Spotlight } from './ui/Aceternity'

const Home = () => {
  return (
    <section id="home" className="home">
      <Spotlight />
      <BackgroundBeams />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container home-grid">
        <div className="portrait-shell">
          <div className="portrait-glow" aria-hidden="true" />
          <img src={picture} alt="Ebenezer Ojo, software engineer" className="avatar" width="1000" height="864" fetchPriority="high" />
          <div className="availability-card">
            <span className="status-dot" aria-hidden="true" />
            Open to UK &amp; global opportunities
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow"><span>Software Engineer</span> • Full-Stack Delivery</p>
          <h1 className="home-greeting">
            I engineer reliable systems that <span className="gradient-text">scale with the business.</span>
          </h1>

          <p className="lead">
            I design and ship secure Java/Spring services and polished React applications—turning
            complex requirements into maintainable, production-ready software.
          </p>

          <div className="highlights" aria-label="Key profile highlights">
            <span>4+ years building for the web</span>
            <span>Banking &amp; enterprise delivery</span>
            <span>Java • Spring Boot • React</span>
          </div>

          <div className="actions">
            <MovingBorder href="#projects" className="btn primary">Explore Selected Work <span aria-hidden="true">→</span></MovingBorder>
            <a href="/cv/EBENEZER-OJO-CV....pdf" className="btn ghost" download>Download Resume</a>
            <a href="mailto:ebetosin@gmail.com" className="btn ghost">Email Me</a>
          </div>

          <dl className="hero-metrics" aria-label="Professional summary">
            <div><dt>4+</dt><dd>Years experience</dd></div>
            <div><dt>5</dt><dd>Delivery environments</dd></div>
            <div><dt>7+</dt><dd>Courses &amp; credentials</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Home
