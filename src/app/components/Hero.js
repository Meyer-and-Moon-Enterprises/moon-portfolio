import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Hero () {
  return (
    <Container className={`blackBackground p-0`} fluid>
      <Container 
        className={`hero w-100 m-0`}
        style={{
          height: '638px', //calc(100vh - 3.5rem)
          // backgroundImage: 'url(/images/hero-background.jpg)',
          // backgroundRepeat: 'no-repeat',
          // backgroundColor: 'black',
          // backgroundSize: 'cover',
        }}
        fluid>
        <Container className='h-100'>
          <Row style={{height: '6rem'}}></Row>
          <Row className='align-items-center justify-content-center'>
            <div className={`col-md-7 text-light`}>
              <div style={{fontSize: '1.5rem', textAlign: 'center'}}>UX & Product Designer</div>
              <div style={{fontFamily: 'Plex-medium', fontSize: '4.5rem', textAlign: 'center'}}>Jesse Moon</div>
              {/* <div style={{height: '6px', borderTop: '6px solid white', width: '18rem'}}></div> */}
              <div 
                className={`pt-3`}
                style={{fontSize: '1.3rem', textAlign: 'center'}}>
                For 8+ years I’ve crafted human-centered solutions for intricate challenges at companies in various stages. I am deeply driven to make a positive impact on the human condition through every project I undertake.
              </div>
            </div>
            {/* <div className='col-4'></div> */}
          </Row>
          {/* <Row className='h-25'></Row> */}
        </Container>
      </Container>
    </Container>
  );
};
