export function downloadResume(resumePath) {
  const link = document.createElement('a')
  link.href = resumePath
  link.download = resumePath.split('/').pop()
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Dispatch toast event
  window.dispatchEvent(new CustomEvent('show-toast', {
    detail: { message: 'Resume download started!' }
  }))
}
