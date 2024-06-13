import React from "react";

import { ManageSvg } from "../components/ManageSvg";
import { Container, Row, Col } from "react-bootstrap";

const Tech = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="tech-major w-auto h-auto">
        <div className="tech-major-title font-bold text-2xl">주요 기술 스택</div>
        <div className="tech-major-icons flex">
          <div className="w-14 h-14">{ManageSvg[0].icon()}</div>
          <div className="w-14 h-14">{ManageSvg[1].icon()}</div>
          <div className="w-14 h-14">{ManageSvg[2].icon()}</div>
          <div className="w-14 h-14">{ManageSvg[3].icon()}</div>
          <div className="w-14 h-14">{ManageSvg[4].icon()}</div>
          <div className="w-14 h-14">{ManageSvg[5].icon()}</div>
        </div>
      </div>

      <div className="tech-detail w-screen h-auto">
        <div className="tech-detail-title font-bold text-2xl">상세 기술 정보</div>
        <div className="tech-detail-wrap">
          <Container>
            <Row>
              <Col sm={4}>Languages</Col>
              <Col sm={8} className="flex text-start">
                <ul>
                  <li>HTML/CSS</li>
                  <li>C#</li>
                </ul>
                <ul>
                  <li>JavaScript</li>
                  <li>C/C++</li>
                </ul>
                <ul>
                  <li>TypeScript</li>
                  <li>Java</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>Frameworks Libraries</Col>
              <Col sm={8} className="flex text-start">
                <ul>
                  <li>React.js</li>
                </ul>
                <ul>
                  <li>Node.js</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>Databases</Col>
              <Col sm={8} className="flex text-start">
                <ul>
                  <li>MySQL</li>
                </ul>
                <ul>
                  <li>MongoDB</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>Tools Idles</Col>
              <Col sm={8} className="flex text-start">
                <ul>
                  <li>VS Code</li>
                  <li>Eclipse</li>
                  <li>Unity</li>
                </ul>
                <ul>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ul>
                <ul>
                  <li>Figma</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Tech;
