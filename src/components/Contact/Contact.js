import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsWhatsapp, BsPencilSquare } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <Container fluid className="contact-section">
        <Row className="contact">
          <Col xs={12} md={12} className="text-center">
            <div className="contact-title">
              LET'S TALK
            </div>
            <Button
              className="contact-btn text-white rounded-pill pl-5 pr-4"
              variant="primary"
              target="_blank"
              href="mailto:hassanshahzaib81@gmail.com"
            >
              <BsPencilSquare style={{ marginRight: "10px", verticalAlign: "sub", fontSize: "20px" }} />
              Write me a email
            </Button>

            <Button
              className="contact-btn text-white rounded-pill pl-4 pr-5 contact-mobile-number"
              variant="success"
              target="_blank"
              href="https://wa.me/923366651625?text=Hi,Shahzaib"
            >
              <BsWhatsapp style={{ marginRight: "10px", verticalAlign: "sub", fontSize: "20px" }} />
              Text a WhatsApp
            </Button>
            <div className="contact-mobile">
              <div className="contact-mobile-message">
                Or, you can contact me via the below phone number.
                I prefer the 9 AM to 9 PM time to contact.
                Also, please follow the Pk time zone for contact.
              </div>
              <div className="contact-mobile-message">
                <Button
                  className="contact-mobile-number"
                  variant="link"
                  href="tel:+923366651625"
                >
                  <AiOutlinePhone style={{ marginRight: "5px", verticalAlign: "sub" }} />
                  +92 336 6651625
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
