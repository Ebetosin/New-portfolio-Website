import picture from '../assets/main_eben.jpg'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container home-grid">
        <img src={picture} alt="Portrait of Ebenezer Ojo" className="avatar" />

        <div>
          <p className="eyebrow">Backend Engineer • Full-Stack Delivery</p>
          <h1 className="home-greeting">
            Building secure backend systems and user-focused applications.
          </h1>

          <p className="lead">
            I design and ship Java/Spring services and React applications that are maintainable,
            reliable, and ready for production environments.
          </p>

          <div className="highlights" aria-label="Key profile highlights">
            <span>4+ years in web development</span>
            <span>Worked on production-grade projects</span>
            <span>Java, Spring Boot, React</span>
          </div>

          <div className="actions">
            <a href="#projects" className="btn primary">View GitHub Projects</a>
            <a href="/cv/Ebenezer_CV.pdf" className="btn ghost" download>Download Resume</a>
            <a href="mailto:ebetosin@gmail.com" className="btn ghost">Email Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
