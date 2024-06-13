import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import { ManageSvg } from "../components/ManageSvg";

const Project = () => {
  return (
    <div>
      <Container className="w-9/12 p-4">
        <Row className="my-5">
          <Col>
            <Card className="w-full h-80">
              <Card.Body className="flex w-full h-full">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/test.jpeg"}
                  className="w-4/12"
                />
                <div className="pj-card-content w-full ml-12 my-4 flex flex-col justify-between">
                  <div className="pj-card-content-text flex flex-col items-start">
                    <Card.Title className="mb-4">Team Project</Card.Title>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button variant="outline-success" className="w-12 h-12 rounded-full">
                    {ManageSvg[6].icon()}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <Card className="w-full h-80">
              <Card.Body className="flex w-full h-full">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/test.jpeg"}
                  className="w-4/12"
                />
                <div className="pj-card-content w-full ml-12 my-4 flex flex-col justify-between">
                  <div className="pj-card-content-text flex flex-col items-start">
                    <Card.Title className="mb-4">Team Project</Card.Title>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button variant="outline-success" className="w-12 h-12 rounded-full">
                    {ManageSvg[6].icon()}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <Card className="w-full h-80">
              <Card.Body className="flex w-full h-full">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/test.jpeg"}
                  className="w-4/12"
                />
                <div className="pj-card-content w-full ml-12 my-4 flex flex-col justify-between">
                  <div className="pj-card-content-text flex flex-col items-start">
                    <Card.Title className="mb-4">Team Project</Card.Title>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button variant="outline-success" className="w-12 h-12 rounded-full">
                    {ManageSvg[6].icon()}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <Card className="w-full h-80">
              <Card.Body className="flex w-full h-full">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/test.jpeg"}
                  className="w-4/12"
                />
                <div className="pj-card-content w-full ml-12 my-4 flex flex-col justify-between">
                  <div className="pj-card-content-text flex flex-col items-start">
                    <Card.Title className="mb-4">Team Project</Card.Title>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button variant="outline-success" className="w-12 h-12 rounded-full">
                    {ManageSvg[6].icon()}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
