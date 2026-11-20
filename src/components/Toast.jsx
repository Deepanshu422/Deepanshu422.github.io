import { useState, useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Toast() {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('Resume download started!')

  useEffect(() => {
    let timer

    const handleToast = (e) => {
      if (e.detail?.message) {
        setMessage(e.detail.message)
      }
      setVisible(true)
      clearTimeout(timer)
      timer = setTimeout(() => {
        setVisible(false)
      }, 3000)
    }

    window.addEventListener('show-toast', handleToast)
    return () => {
      window.removeEventListener('show-toast', handleToast)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div id="resumeToast" className={`toast ${visible ? 'show' : ''}`}>
      <FaCheckCircle style={{ marginRight: '8px' }} /> {message}
    </div>
  )
}
