const ResumeButton = () => {
  function download() {
    console.info('[Resume] Download started')
    window.open('/resume.pdf', '_blank')
  }

  return (
    <button className="btn primary" onClick={download}>
      Download CV
    </button>
  )
}

export default ResumeButton
