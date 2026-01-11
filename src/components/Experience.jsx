const EXPERIENCE = [
  {
    role: "Backend Developer",
    company: "Nova Bank",
    period: "2024 - Present",
    desc: "Developed enterprise banking systems backend using Spring Boot, implementing BVN/NIN verification, asset management, referral workflows, and middleware APIs with secure and efficient architecture.",
  },
  {
    role: "Fullstack Developer",
    company: "Freelancing",
    period: "2023 - Present",
    desc: "Built high-quality frontend applications and robust, scalable REST APIs. Integrated secure token-based authentication and implemented comprehensive logging and audit mechanisms to ensure reliability, maintainability, and overall application performance.",
  },
  {
    role: "Frontend Developer",
    company: "KDN Plus",
    period: "2024 - 2025",
    desc: "Designed and developed responsive user interfaces with React and Next.js, optimized application performance, and enhanced accessibility to improve user experience across devices.",
  },
  {
    role: "Fullstack Developer",
    company: "Federal University of Agriculture Abeokuta",
    period: "2023 - 2024",
    desc: "Designed and developed responsive full-stack web applications using React, focusing on performance optimization, accessibility, and modern UI/UX best practices.",
  },
  {
    role: "Frontend Intern",
    company: "Side Hustle (TERRA HQ)",
    period: "2021",
    desc: "Collaborated with other frontend developers in building responsive user interfaces using React, improving performance, and ensuring accessible and user-friendly web experiences.",
  },
  {
    role: "Engineering Intern",
    company: "University Of Ilorin",
    period: "2019",
    desc: "Explored multiple engineering fields, including computer engineering, developing basic websites using HTML, CSS, and JavaScript, and gaining foundational web development experience.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="alt">
      <div className="container">
        <h2>Experience</h2>
        <p className="muted">
          Professional experience highlighting my contributions to real-world
          systems and production-level applications.
        </p>

        <div className="experience-grid">
          {EXPERIENCE.map((exp) => (
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
  );
};

export default Experience;
