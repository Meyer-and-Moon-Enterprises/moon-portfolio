import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Hero () {
  return (
    <Container className={`blackBackground p-0`} fluid>
      <Container 
        className={`hero w-100 m-0`}
        style={{
          height: '838px', //calc(100vh - 3.5rem)
          backgroundImage: 'url(/images/hero-background.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          backgroundSize: 'cover',
        }}
        fluid>
        <Container className='h-100'>
          <Row className='h-75 align-items-center justify-content-center'>
            <div className={`col-md-8 text-light`}>
              <div style={{fontSize: '4.5rem'}}>Hi, I’m Jesse</div>
              <div style={{height: '6px', borderTop: '6px solid white', width: '18rem'}}></div>
              <div 
                className={`pt-3`}
                style={{fontSize: '1.6rem'}}>
                I am a product designer with a passion for solving complex problems, improving the human condition and understanding things holistically.
              </div>
            </div>
            <div className='col-4'></div>
          </Row>
          <Row className='h-25'></Row>
        </Container>
      </Container>
    </Container>
  );
};
