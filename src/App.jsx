import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import profileImage from './assets/p1.png'
import resume from './assets/SriramR-Resume.pdf'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resume
    link.download = 'SriramR-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_nzrqe4a' // Replace with your EmailJS service ID
      const templateId = 'template_5gp62cw' // Replace with your EmailJS template ID
      const publicKey = '8jMpceYz8T7EXPmHA' // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'uxsriram95@gmail.com' // Your email address
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
         
          <div className="nav-menu">
            {['home', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                className={`nav-item ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
        <div className="hero-image">
            <img src={profileImage} alt="Sriram R" className="profile-img" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Sriram R</span>
            </h1>
            <h2 className="hero-subtitle">Designer & Developer with AI Expertise</h2>
            <p className="hero-description">
              Creative designer and full-stack developer with 6.6 years of experience building 
              10+ innovative products. Specializing in UI/UX design, modern web development, 
              and AI-powered solutions that solve real-world problems.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Products Contributed</span>
              </div>
              <div className="stat">
                <span className="stat-number">6.6</span>
                <span className="stat-label">Years Experience</span>
              </div>
      </div>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={downloadResume}>
                Download CV
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
            </div>
          </div>
         
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a creative designer and full-stack developer with 6.8 years of experience 
                building innovative products. I specialize in UI/UX design, modern web development, 
                and AI-powered solutions that solve complex business challenges.
              </p>
              <p>
                My passion lies in creating user-centered designs and developing scalable applications 
                that leverage cutting-edge technologies. From AI-powered chatbots to collaborative 
                platforms, I build products that make a real impact in the digital world.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:uxsriram95@gmail.com" className="contact-value">uxsriram95@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Age:</span>
                  <span className="contact-value">30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Professional Journey</h2>
          <div className="vertical-timeline">
            <div className="timeline-item">
              <div className="timeline-date">
                <span className="date-year">Jul 2024 - Present</span>
                <span className="date-duration">6 mos</span>
              </div>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <h3>Assistant Manager</h3>
                  <span className="content-type">HCL GUVI</span>
                </div>
                <div className="content-body">
                  <p className="content-description">
                    Leading product development and technical initiatives at HCL GUVI. 
                    Overseeing the creation of innovative EdTech solutions and managing 
                    development teams to deliver cutting-edge educational platforms.
                  </p>
                  <div className="content-achievements">
                    <div className="achievement-item">
                      <span className="achievement-icon">🏢</span>
                      <span>HCL GUVI - Leading EdTech Platform</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">🚀</span>
                      <span>Led development of 3+ major products</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">🤖</span>
                      <span>Integrated AI features in learning platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">
                <span className="date-year">Jan 2023 - Jul 2024</span>
                <span className="date-duration">1 yr 6 mos</span>
              </div>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <h3>MERN Stack Mentor</h3>
                  <span className="content-type">HCL GUVI</span>
                </div>
                <div className="content-body">
                  <p className="content-description">
                    Developed and maintained MERN stack applications at HCL GUVI. 
                    Built scalable web applications using MongoDB, Express.js, React.js, 
                    and Node.js while implementing modern development practices and AI integrations.
                  </p>
                  <div className="content-achievements">
                    <div className="achievement-item">
                      <span className="achievement-icon">📍</span>
                      <span>Chennai, Tamil Nadu, India</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">💻</span>
                      <span>Built 4+ production MERN applications</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">🤖</span>
                      <span>Integrated AI chatbots and recommendation systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">
                <span className="date-year">Feb 2022 - Dec 2022</span>
                <span className="date-duration">11 mos</span>
              </div>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <h3>UX Designer</h3>
                  <span className="content-type">Aximsoft</span>
                </div>
                <div className="content-body">
                  <p className="content-description">
                    Designed and developed user experiences for enterprise software applications at Aximsoft. 
                    Created intuitive interfaces and implemented frontend solutions while collaborating 
                    with development teams to deliver high-quality user experiences.
                  </p>
                  <div className="content-achievements">
                    <div className="achievement-item">
                      <span className="achievement-icon">📍</span>
                      <span>Coimbatore, Tamil Nadu, India</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">🎨</span>
                      <span>Designed and developed 3+ enterprise products</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">⚡</span>
                      <span>Improved user engagement by 50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">
                <span className="date-year">May 2020 - Jan 2022</span>
                <span className="date-duration">1 yr 8 mos</span>
              </div>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <h3>Technical Lead - UX Design</h3>
                  <span className="content-type">ProwessTech</span>
                </div>
                <div className="content-body">
                  <p className="content-description">
                    Led full-stack development and UX design initiatives at ProwessTech. 
                    Architected and developed scalable web applications while establishing 
                    design systems and technical standards for the development team.
                  </p>
                  <div className="content-achievements">
                    <div className="achievement-item">
                      <span className="achievement-icon">👨‍💼</span>
                      <span>Led development of 2+ major products</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">📈</span>
                      <span>Improved user engagement by 40%</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">🎯</span>
                      <span>Established design systems and technical standards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">
                <span className="date-year">Apr 2018 - Apr 2020</span>
                <span className="date-duration">2 yrs</span>
              </div>
              <div className="timeline-marker">
                <div className="marker-dot marker-final"></div>
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <h3>Frontend Developer</h3>
                  <span className="content-type">Marketishop</span>
                </div>
                <div className="content-body">
                  <p className="content-description">
                    Started professional career as a Frontend Developer at Marketishop. 
                    Developed responsive e-commerce applications using modern frontend technologies 
                    and gained foundational experience in building scalable web products.
                  </p>
                  <div className="content-achievements">
                    <div className="achievement-item">
                      <span className="achievement-icon">💻</span>
                      <span>Built complete e-commerce platform</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">🚀</span>
                      <span>Developed 2+ production applications</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">📱</span>
                      <span>Implemented mobile-first responsive design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Project Nova</h3>
                <div className="project-tags">
                  <span className="tag">AI</span>
                  <span className="tag">RAG</span>
                  <span className="tag">Chatbot</span>
                </div>
              </div>
              <p className="project-description">
                Designed and developed an AI-based chatbot counselor using RAG system. 
                Acts as a bridge between learners to facilitate conversations, clarify 
                doubts, and help them choose appropriate courses.
              </p>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Editod</h3>
                <div className="project-tags">
                  <span className="tag">Video</span>
                  <span className="tag">Collaboration</span>
                  <span className="tag">Review</span>
                </div>
              </div>
              <p className="project-description">
                Video review application that bridges video editors and reviewers. 
                Allows direct viewing, editing suggestions, and approval status in one place, 
                eliminating the need for multiple software tools.
              </p>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Azile Cafe</h3>
                <div className="project-tags">
                  <span className="tag">Management</span>
                  <span className="tag">Analytics</span>
                  <span className="tag">Performance</span>
                </div>
              </div>
              <p className="project-description">
                Work management application for team collaboration. Enables work assignment, 
                status tracking, performance metrics analysis, and helps teams improve 
                overall productivity and performance.
        </p>
      </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="card-header">
                <div className="card-icon design-icon">🎨</div>
                <div className="card-title-section">
                  <h3>Design & UX</h3>
                  <p>Creating intuitive and visually appealing user experiences through modern design principles and tools.</p>
                </div>
              </div>
              <div className="skill-badges">
                {['UI/UX', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Responsive Design', 'Wireframing', 'Prototyping', 'Accessibility', 'Interaction Design', 'Branding', 'Visual Identity', 'Color Theory', 'Typography', 'Iconography'].map((skill) => (
                  <span key={skill} className="skill-badge design-badge">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <div className="card-header">
                <div className="card-icon frontend-icon">💻</div>
                <div className="card-title-section">
                  <h3>Frontend Development</h3>
                  <p>Building responsive and interactive web applications using modern JavaScript frameworks and libraries.</p>
                </div>
              </div>
              <div className="skill-badges">
                {['React.js', 'Redux', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3'].map((skill) => (
                  <span key={skill} className="skill-badge frontend-badge">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <div className="card-header">
                <div className="card-icon backend-icon">⚙️</div>
                <div className="card-title-section">
                  <h3>Backend & AI</h3>
                  <p>Developing robust server-side applications and integrating AI-powered solutions for enhanced functionality.</p>
                </div>
              </div>
              <div className="skill-badges">
                {['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'].map((skill) => (
                  <span key={skill} className="skill-badge backend-badge">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <div className="card-header">
                <div className="card-icon tools-icon">🛠️</div>
                <div className="card-title-section">
                  <h3>Tools & Platforms</h3>
                  <p>Leveraging industry-standard tools and cloud platforms for efficient development and deployment.</p>
                </div>
              </div>
              <div className="skill-badges">
                {['Git/GitHub', 'Docker', 'Postman', 'Vercel', 'Netlify', 'AWS', 'EC2', 'S3'].map((skill) => (
                  <span key={skill} className="skill-badge tools-badge">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <div className="card-header">
                <div className="card-icon soft-icon">🤝</div>
                <div className="card-title-section">
                  <h3>Soft Skills</h3>
                  <p>Essential interpersonal and professional skills that drive successful collaboration and project delivery.</p>
                </div>
              </div>
              <div className="skill-badges">
                {['Problem Solving', 'Communication', 'Collaboration', 'Agile Development'].map((skill) => (
                  <span key={skill} className="skill-badge soft-badge">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <div className="card-header">
                <div className="card-icon vibing-icon">⚡</div>
                <div className="card-title-section">
                  <h3>Vibing Tools</h3>
                  <p>Modern development tools and platforms that enhance productivity and streamline the development workflow.</p>
                </div>
              </div>
              <div className="skill-badges">
                {['Lovable', 'Bolt', 'Cursor', 'Windsurf'].map((skill) => (
                  <span key={skill} className="skill-badge vibing-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Build Something Amazing</h3>
              <p>
                I'm always excited about new opportunities to create innovative products, 
                collaborate on challenging projects, and discuss cutting-edge technology solutions. 
                Let's connect and build something extraordinary together!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:uxsriram95@gmail.com">uxsriram95@gmail.com</a>
                </div>
              </div>
            </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-status success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-status error">
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sriram R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
