import { FiDownload } from 'react-icons/fi'

const ResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1JJmizpLRBG8ZLX_VjtCXeWc-ZD3UW8q2"
      className="btn primary download-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download CV
      <FiDownload className="download-icon" />
    </a>
  )
}

export default ResumeButton
