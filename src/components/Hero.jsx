import { useRef } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa6'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { downloadResume } from '../utils/downloadResume'

export default function Hero({ data }) {
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  useScrollAnimation(contentRef)
  useScrollAnimation(imageRef)

  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in" ref={contentRef}>
        <p className="mono">Hi, my name is</p>
        <h1>{data.name}.</h1>
        <h2>{data.tagline}</h2>
        <p className="desc">{data.description}</p>
        <div className="contact-info mono" style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
          <div style={{ marginBottom: '5px' }}>
            <FaEnvelope style={{ marginRight: '8px' }} /> {data.email}
          </div>
          <div>
            <FaPhone style={{ marginRight: '8px' }} /> {data.phone}
          </div>
        </div>
        <div className="social-icons">
          <a href={data.github} target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedinIn />
          </a>
          <button onClick={() => downloadResume(data.resumePath)} className="btn-outline">
            Resume
          </button>
        </div>
      </div>

      <div className="hero-img-wrapper fade-in" ref={imageRef}>
        <img src={data.image} alt={`${data.name} Profile`} className="hero-img" />
      </div>
    </section>
  )
}
