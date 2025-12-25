const ResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1JJmizpLRBG8ZLX_VjtCXeWc-ZD3UW8q2"
      className="btn primary"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => console.info('[Resume] Direct download clicked')}
    >
      Download CV
    </a>
  )
}

export default ResumeButton
