import React from 'react'
import { FaCertificate } from 'react-icons/fa'

const CERTIFICATIONS = [
    {
    name: "Enterprise Thinking for Information Technology Professionals",
    issuer: "Udemy",
    date: "2025",
    credentialId: "UC-08476d98-c4d8-4d60-b85c-a1f50f97b6ca",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-08440e1a-44ee-4112-98bd-29430bb5f53e",
  },
  {
    name: "Front-End Web Development",
    issuer: "Terra Hq.",
    date: "2021",
    credentialId: "SH-IT-48148",
  },
  {
    name: "Java Spring Boot Development",
    issuer: "YouTube (Telusko   Academy)",
    date: "2023",
    credentialId: "",
  },
  {
    name: "Spring Boot Microservices Development",
    issuer: "YouTube (Telusko   Academy)",
    date: "2023",
    credentialId: "",
  },
  {
    name: "Jobberman Soft Skills Certification",
    issuer: "Jobberman",
    date: "2021",
    credentialId: "",
  },
]

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <p className="muted">
          Professional certifications validating my expertise in cloud computing,
          programming languages, and web development frameworks.
        </p>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.credentialId} className="certification-card">
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <h3>{cert.name}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
