import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import { ManageSvg } from "../components/ManageSvg";

const Main = () => {
  const btnText = { btn1: "Blog", btn2: "Github", btn3: "Email" };

  const renderTooltip = (id) => (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {btnText[id]}
    </Tooltip>
  );

  const handleCopyClipBoard = () => {
    try {
      navigator.clipboard.writeText("chunsim015@gmail.com");
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  };

  return (
    <div className="main-page h-[48rem] flex items-center justify-center">
      <Container className="w-9/12 main-container h-9/12">
        <Row className="w-full h-full main-row">
          <Col className="flex flex-col mr-2 main-intro">
            <div className="flex flex-col items-end justify-end w-full h-full main-text">
              <p className="my-2 text-5xl font-bold">안녕하세요</p>
              <p className="my-2 text-5xl font-bold">
                개발자 <span className="text-[#1A8754]">홍지민</span>입니다
              </p>
            </div>

            <div className="flex items-center justify-end w-full h-full main-contact-wrap">
              <div className="mx-2 main-contact">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("btn1")}
                >
                  <Button
                    variant="success"
                    className="w-16 h-16 m-0 p-1.5 rounded-full"
                  >
                    <a
                      href="https://velog.io/@chunsim015/posts"
                      target="_blank"
                      className="flex justify-center"
                      rel="noreferrer"
                    >
                      {ManageSvg[7].icon()}
                    </a>
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="mx-2 main-contact">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("btn2")}
                >
                  <Button
                    variant="success"
                    className="w-16 h-16 m-0 p-1.5 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/images/github.png"}
                        alt=""
                        className="rounded-full"
                      />
                    </a>
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="mx-2 main-contact">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("btn3")}
                >
                  <Button
                    variant="success"
                    onClick={handleCopyClipBoard}
                    className="w-16 h-16 p-2 m-0 rounded-full"
                  >
                    {ManageSvg[9].icon()}
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <Col className="flex flex-col items-center justify-center w-full h-full mx-10 main-img">
            <img
              src={process.env.PUBLIC_URL + "/images/profile.png"}
              alt=""
              width="90%"
              className="rounded-full"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
