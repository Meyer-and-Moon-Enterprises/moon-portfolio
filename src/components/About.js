import { Container, Row, Col } from 'react-bootstrap';

export default function AboutComponent () {
  return (
    <Container
      className={`blackBackground h-100`}
      fluid
    >
      <Container>
        <Row className={`spacer`}></Row>
        <Row className={`pt-3 pb-5`}>
          <Col className='d-flex flex-column justify-content-between'>
            <Row>
              <h1>What I’m all about</h1>
              <p>
                I love solving complex problems, improving the human condition
                and understanding things holistically. My career began as an
                industrial design consultant. The Texas Children’s Hospital was
                my first client, together we created the immunology department’s
                3D printing program. Afterwards, an internship at IBM motivated
                my leap to software design. I was at IBM for around 5 years
                before making the switch my current role in Seattle.
              </p>
            </Row>
            <Row className='d-flex flex-row justify-content-between flex-grow-1 align-items-center'>
              <Col className='d-flex justify-content-between flex-row'>
                <div 
                  className={``}
                  style={{
                    borderTop: '2px solid #2e2e2e',
                    width: '40%',
                  }}
                  >
                  <p className='pt-3 h6'>MY SKILL SET</p>
                  <ul className='list-unstyled pt-3'>
                    <li>Experience design</li>
                    <li>Product design</li>
                    <li>User-centered design</li>
                    <li>Design thinking Prototyping</li>
                    <li>Creative problem solving</li>
                    <li>Cross-discipline collaboration</li>
                    <li>Communication (all types)</li>
                    <li>Design leadership</li>
                    <li>Project management</li>
                    <li>Cross-functional team leadership Facilitation</li>
                  </ul>
                </div>
                <div 
                  className={``}
                  style={{
                    borderTop: '2px solid #2e2e2e',
                    width: '40%',
                  }}
                  >
                  <p className='pt-3 h6'>INTERESTS</p>
                  <ul className='list-unstyled pt-3'>
                    <li>Psychology</li>
                    <li>Second hand books</li>
                    <li>Continued Learning</li>
                    <li>Composting</li>
                    <li>Camping</li>
                    <li>Volunteering</li>
                    <li>Sustainability</li>
                    <li>The 4 R’s</li>
                    <li>Growing food</li>
                    <li>Community building</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className={``}>
              <picture>
                <img src='/images/about-image.png'></img>
              </picture>
            </div>
          </Col>
        </Row>
        <Row className={`spacer`}></Row>
        <Row className='pt-5'>
          <Col>
            <p className='h2'>CONTACT ME</p>
            <p className='pt-3'>
              Thank you for stopping by and taking a look at my work! Due to the
              internal-facing nature of many if my projects I am only able to
              showcase a tightly curated sample of my work in public spaces. If
              you would like to see more or have questions about my process,
              reach out! I’d love to take you through the nitty-gritty of it
              all.
            </p>
          </Col>
          <Col>
            <form>
              <label className={``}>Name*</label>
              <div className='d-flex justify-content-between'>
                <div 
                  className={``}
                  style={{width: '49.5%'}}
                  >
                  <input
                    id='firstName'
                    className={`form-control`}
                    required
                  ></input>
                  <label
                    htmlFor='firstName'
                    className={`form-label`}
                    style={{fontSize: '13px'}}
                  >
                    First Name
                  </label>
                </div>
                <div 
                  className={``}
                  style={{width: '49.5%'}}
                  >
                  <input
                    id='lastName'
                    className={`form-control`}
                    required
                  ></input>
                  <label
                    htmlFor='lastName'
                    className={`form-label`}
                    style={{fontSize: '13px'}}
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <label htmlFor='email' className={`form-label`}>
                Email*
              </label>
              <input
                id='email'
                className={`form-control`}
                required
              ></input>

              <label
                htmlFor='messageContent'
                className={`form-label mt-3`}
              >
                Message*
              </label>
              <textarea
                id='messageContent'
                className={`form-control`}
                style={{height: '153px'}}
                required
              ></textarea>

              <button
                type='submit'
                className={`btn btn-dark mt-3 mb-3`}
                style={{
                  backgroundColor: 'black',
                  borderColor: '#2e2e2e'
                }}
              >
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
