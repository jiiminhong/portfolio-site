import React from "react";
import { Container, Row, Col, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import { ManageSvg } from "../components/ManageSvg";

const Main = () => {
  const btnText = { btn1: "Blog", btn2: "Github", btn3: "Email" };

  const renderTooltip = (id) => (props) =>
    (
      <Tooltip id="button-tooltip" {...props}>
        {btnText[id]}
      </Tooltip>
    );

  return (
    <div className="main-page h-[48rem] flex items-center justify-center">
      <Container className="main-container w-9/12 h-9/12">
        <Row className="main-row w-full h-full">
          <Col className="main-intro mr-2 flex flex-col">
            <div className="main-text w-full h-full flex flex-col justify-end items-end">
              <p className="font-bold text-5xl">안녕하세요</p>
              <p className="font-bold text-5xl">개발자 홍지민입니다</p>
            </div>

            <div className="main-contact-wrap w-full h-full flex justify-end items-center">
              <div className="main-contact mx-2">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("btn1")}
                >
                  <Button variant="success" className="w-16 h-16 m-0 p-1.5 rounded-full">
                    <a href="" target="_blank">
                      {ManageSvg[7].icon()}
                    </a>
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="main-contact mx-2">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("btn2")}
                >
                  <Button variant="success" className="w-16 h-16 m-0 p-1.5 rounded-full">
                    <a href="" target="_blank">
                      {ManageSvg[7].icon()}
                    </a>
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="main-contact mx-2">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("btn3")}
                >
                  <Button variant="success" className="w-16 h-16 m-0 p-1.5 rounded-full">
                    <a href="" target="_blank">
                      {ManageSvg[7].icon()}
                    </a>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <Col className="main-img w-full h-full ml-2 flex flex-col justify-center items-center">
            <img src={process.env.PUBLIC_URL + "/images/test.jpeg"} alt="" width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
