import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const contacts = [
    { icon: <MdEmail />, href: 'mailto:ebetosin@gmail.com', label: 'Email' },
    { icon: <FaGithub />, href: 'https://github.com/Ebetosin', label: 'GitHub' },
    { icon: <FaTwitter />, href: 'https://x.com/ebetosin?s=21', label: 'Twitter' },
    { icon: <FaLinkedin />, href: 'http://www.linkedin.com/in/ebenezer-ojo-ba11ab222', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <p className="muted">
          Reach me via email or connect on GitHub, Twitter, and LinkedIn.
        </p>

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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
