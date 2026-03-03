import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const contacts = [
  { icon: <MdEmail />, href: 'mailto:ebetosin@gmail.com', label: 'Email' },
  { icon: <FaGithub />, href: 'https://github.com/Ebetosin', label: 'GitHub' },
  { icon: <FaXTwitter />, href: 'https://x.com/ebetosin', label: 'X' },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/ebenezer-ojo-ba11ab222',
    label: 'LinkedIn',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Let&apos;s Work Together</h2>
        <p className="muted">
          Available for backend, full-stack, and platform engineering roles.
        </p>

        <div className="actions contact-cta">
          <a href="mailto:ebetosin@gmail.com" className="btn primary">Discuss an Opportunity</a>
          <a href="/cv/Ebenezer_CV.pdf" className="btn ghost" download>Download Resume</a>
        </div>

        <div className="contact-icons">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
              aria-label={c.label}
              title={c.label}
            >
              {c.icon}
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
