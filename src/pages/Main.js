import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <div className="main-page">
      <Container className="main-container">
        <Row className="main-row h-auto">
          <Col className="main-intro flex justify-center items-center">
            <div className="main-text">
              <p className="font-bold text-2xl">안녕하세요</p>
              <p className="font-bold text-2xl">개발자 홍지민입니다.</p>
            </div>

            <div main-contact>dd</div>
          </Col>
          <Col className="main-img">
            <img src={process.env.PUBLIC_URL + "/images/test.jpeg"} alt="" width="50%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
