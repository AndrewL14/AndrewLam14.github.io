import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Back-end developer"];
  const period = 2000;


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className="animate__animated">
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi, I'm Andrew`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Back-end Devloper]'>a Backend Developer<span className="wrap">{text}</span></span></h1>
                  <p>I'm a graduate of Bloomtech Institue of Technology, majoring in Backend development and Computer
                    Science.</p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}