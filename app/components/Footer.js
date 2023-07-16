"use client";
import { Container, Row } from "react-bootstrap";
import { MotionHoverAnimation } from "./motion/MotionHoverAnimation";

export default function Footer() {
  return (
    <>
      <Container className={`blackBackground`} fluid>
        <Container className={`blackBackground`}>
          {/* <Row className={`spacer`}></Row> */}
          <Row style={{ height: "100px" }}>
            <div
              className={`d-flex flex-row justify-content-center align-items-center`}
            >
              <MotionHoverAnimation>
                <a href='https://www.behance.net/jessemoon'>
                  <img
                    className={`img-fluid`}
                    style={{ height: "26px", paddingRight: "20px" }}
                    src='/images/beh.png'
                  ></img>
                </a>
              </MotionHoverAnimation>
              <MotionHoverAnimation>
                <a href='https://www.instagram.com/genuine_jesse/?hl=en'>
                  <img
                    className={`img-fluid`}
                    style={{ height: "26px", paddingRight: "20px" }}
                    src='/images/instagram.png'
                  ></img>
                </a>
              </MotionHoverAnimation>
              <MotionHoverAnimation>
                <a href='https://www.linkedin.com/in/jmmoon/'>
                  <img
                    className={`img-fluid`}
                    style={{ height: "26px", paddingRight: "20px" }}
                    src='/images/linkedin.png'
                  ></img>
                </a>
              </MotionHoverAnimation>
              <MotionHoverAnimation>
                <a href='https://dribbble.com/jessemoon'>
                  <img
                    className={`img-fluid`}
                    style={{ height: "26px" }}
                    src='/images/basketball.png'
                  ></img>
                </a>
              </MotionHoverAnimation>
            </div>
          </Row>
        </Container>
      </Container>
      <div className={`separator`}></div>
      <Container className={`blackBackground`} fluid>
        <Container className={`blackBackground`}>
          <Row
            className={`d-flex flex-row justify-content-between align-items-center`}
            style={{ height: "100px" }}
          >
            <div className={`col-3 d-none d-lg-block text-center fst-italic `}>
              Made remotely from Seattle
            </div>
            <div className={`col-lg-3 text-center`} style={{}}>
              © 2023 genuinejesse.com
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
}
