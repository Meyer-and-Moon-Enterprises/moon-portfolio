"use client"
import { Container, Row, Col, Toast } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';

export default function AboutComponent () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const toggleShowToast = () => setShowToast(!showToast);

  const showToastNow = (e) => {
    e.preventDefault()
    setShowToast(true)
  }


  const handleEmailSubmit = (e) => {

    if(name === '' || email === '' || message === '') {
      return
    }

    let emailBody = `Name: ${name} \n\nEmail: ${email} \n\n\nMessage: ${message}`

    e.preventDefault();

    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sendit: true,
        emailBody: emailBody,
        emailAddress: email,
      }),
    }).then((res) => {
      if(res.status === 200) {
        setToastMessage('Message sent!')
        setShowToast(true)


        setName('')
        setEmail('')
        setMessage('')
      }
    }).catch((err) => {
      setToastMessage('Message not sent. Please email me directly at: jemoon20@gmail.com')
      setShowToast(true)

      setName('')
      setEmail('')
      setMessage('')
    }
    )

  }


  return (
    <Container className={`blackBackground h-100`} fluid>
      <div style={{top: '90px'}} className={`position-fixed start-50 translate-middle`}>
        <Toast onClose={() => setShowToast(false)} delay={5000} className={`d-flex bottom-0 justify-content-center`} animation={true} bg={'primary'} show={showToast} autohide>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </div>
      <Container>
        <Row className={`spacer`} />
        <Row className={`pt-3`}>
          <div className='col-12 d-lg-none d-flex justify-content-center'>
            <div className={``}>
              <picture>
                <img className='img-fluid' src='/images/about-image.png'></img>
              </picture>
            </div>
          </div>
          <div className='col-12 d-lg-none mt-5'></div>
          <div className='col d-flex flex-column justify-content-between'>
            <div className='row'>
              <h1>What I’m all about</h1>
              <p>
                I love solving complex problems, improving the human condition and understanding things holistically.
              </p>
              <p>
                My career began as an industrial design consultant. The Texas Children’s Hospital was my first client, together we created the <a style={{textDecorationColor: 'white', color: 'white'}} href='https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E17D960F82D3BE1E5D9CCE1D0D29514B/S1551929515000607a.pdf/div-class-title-three-dimensional-printing-of-super-resolution-microscopy-images-div.pdf'>immunology department’s 3D printing program</a>. Afterwards, an internship at IBM motivated my leap to software design. During my roughly 5 years at IBM, my teams primarily focused on improving the employee experience and supporting <a style={{textDecorationColor: 'white', color: 'white'}} href='https://qz.com/755741/ibm-is-becoming-the-worlds-largest-design-company'>transformation efforts</a>. 
              </p>
              <p>
                My curiosity to experience a different company size & structure influenced my most recent role where I joined a seed startup as employee #7. For my next role, I’m keen to join a company with a sustainable mission & values.  
              </p>
            </div>
            <Row className='d-flex flex-row justify-content-between flex-grow-1 align-items-center'>
              <div className='col-12 d-flex justify-content-between flex-row'>
                
                <div className={`d-block d-lg-none mt-5`} style={{borderTop: '2px solid #2e2e2e', width: '100%',}}
                  >
                  <p className='pt-3 h6'>MY SKILL SET</p>
                  <ul className='list-unstyled pt-3'>
                    <li>Experience design</li>
                    <li>Product design</li>
                    <li>User-centered design</li>
                    <li>Design thinking</li>
                    <li>Prototyping</li>
                    <li>Creative problem solving</li>
                    <li>Cross-discipline collaboration</li>
                    <li>Communication (all types)</li>
                    <li>Design leadership</li>
                    <li>Project management</li>
                    <li>Cross-functional team leadership</li>
                    <li>Facilitation</li>
                  </ul>
                </div>
              </div>
              <Col className='d-flex justify-content-between flex-row'>
                <div className={`d-none d-lg-block`} style={{borderTop: '2px solid #2e2e2e', width: '40%',}}
                  >
                  <p className='pt-3 h6'>MY SKILL SET</p>
                  <ul className='list-unstyled pt-3'>
                    <li>Experience design</li>
                    <li>Product design</li>
                    <li>User-centered design</li>
                    <li>Design thinking</li>
                    <li>Prototyping</li>
                    <li>Creative problem solving</li>
                    <li>Cross-discipline collaboration</li>
                    <li>Communication (all types)</li>
                    <li>Design leadership</li>
                    <li>Project management</li>
                    <li>Cross-functional team leadership</li>
                    <li>Facilitation</li>
                  </ul>
                </div>
                <div className={`d-none d-lg-block`} style={{borderTop: '2px solid #2e2e2e', width: '40%',}}>
                  <p className='pt-3 h6'>INTERESTS</p>
                  <ul className='list-unstyled pt-3'>
                    <li>Psychology</li>
                    <li>Sustainability</li>
                    <li>Continued Learning</li>
                    <li>Urban Farming</li>
                    <li>Composting</li>
                    <li>Outdoor recreation</li>
                    <li>Servant leadership</li>
                    <li>Community building</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <Col className='d-none d-lg-flex d-flex justify-content-center'>
            <div className={``}>
              <picture>
                <img className='img-fluid' style={{borderRadius: '20px'}} src='/images/about-image.png'></img>
              </picture>
            </div>
          </Col>
        </Row>
        <Row className={`d-none d-lg-block spacer mt-5`} />
        <Row className='mt-5'>
          <div className='col-12 col-lg-6'>
            <p className='h2'>CONTACT ME</p>
            <p className='pt-3'>
              Thank you for stopping by and taking a look at my work! Due to the
              internal-facing nature of many of my projects I am only able to
              showcase a tightly curated sample of my work in public spaces. If
              you would like to see more or have questions about my process,
              reach out! I’d love to take you through the nitty-gritty of it
              all.
            </p>
          </div>
          <div className='col-12 col-lg-6'>
            <form>
              <label className={``}>Name*</label>
              <div className={`w-100`}>
                <input value={name} id='firstName' onChange={(e) => {setName(e.target.value)}} className={`form-control`} required />
              </div>
              <label htmlFor='email' className={`form-label mt-3`}>
                Email*
              </label>
              <input value={email} id='email' onChange={(e) => {setEmail(e.target.value)}} className={`form-control`} required />
              <label htmlFor='messageContent' className={`form-label mt-3`} >
                Message*
              </label>
              <textarea value={message} id='messageContent' onChange={(e) => {setMessage(e.target.value)}} className={`form-control`} style={{height: '153px'}} required></textarea>
              <button type='submit' onClick={handleEmailSubmit} className={`btn btn-dark mt-3 mb-3`} style={{backgroundColor: 'black', borderColor: '#2e2e2e'}}>
                Submit
              </button>
            </form>
          </div>
        </Row>
        <div className={`spacer`}></div>
      </Container>
    </Container>
  );
};
