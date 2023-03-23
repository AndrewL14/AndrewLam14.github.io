import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import paperPlane from "../assets/icons/paper-plane-solid.svg";
import person from "../assets/icons/person-solid.svg";
import phone from "../assets/icons/mobile-solid.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Textarea } from "react-bootstrap-icons";

export const Contact = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kd2r78t",
        "template_viskgr9",
        ref.current,
        "OocdC6Vq8XKJfccxb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col className="main-img-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} id="contact-main-img" src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div class="contact-bottom">
                    <form className="form" ref={ref} onSubmit={handleSubmit}>
                      <input className="input" placeholder=" Name" name="name"/>
                      <input className="input" placeholder=" Email" name="email"/>
                      <textarea placeholder="Your message" name="message" row={10}/>
                      <button type="submit">send</button>
                      {success && 
                      "Your message has been sent. I'll get back to you soon."}
                    </form>
                    <h1 class="sub-title">Contact Info</h1>
                    <p><img className="social-icon-contact" src={person} alt="name"/> Andrew Lam</p>
                    <p><img className="social-icon-contact" src={paperPlane} alt="email"/> andrew.lam965@gmail.com</p>
                    <p><img className="social-icon-contact" src={phone} alt="phone number"/> (210) 330-5433</p>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}