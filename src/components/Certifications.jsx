import { FaCertificate } from 'react-icons/fa'

const CERTIFICATIONS = [
  {
    name: 'Enterprise Thinking for Information Technology Professionals',
    issuer: 'Udemy',
    date: '2025',
    credentialId: 'UC-08476d98-c4d8-4d60-b85c-a1f50f97b6ca',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Udemy',
    date: '2024',
    credentialId: 'UC-08440e1a-44ee-4112-98bd-29430bb5f53e',
  },
  {
    name: 'Front-End Web Development',
    issuer: 'Terra HQ',
    date: '2021',
    credentialId: 'SH-IT-48148',
  },
  {
    name: 'Java Spring Boot Development',
    issuer: 'Telusko Academy',
    date: '2023',
    credentialId: '',
  },
  {
    name: 'Spring Boot Microservices Development',
    issuer: 'Telusko Academy',
    date: '2023',
    credentialId: '',
  },
  {
    name: 'Jobberman Soft Skills Certification',
    issuer: 'Jobberman',
    date: '2021',
    credentialId: '',
  },
]

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <p className="muted">
          Continuous learning in cloud, backend architecture, and software engineering delivery.
        </p>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <article key={`${cert.name}-${cert.issuer}-${cert.date}`} className="certification-card">
              <div className="cert-icon" aria-hidden="true">
                <FaCertificate />
              </div>
              <h3>{cert.name}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
              {cert.credentialId && <p className="credential-id">ID: {cert.credentialId}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
