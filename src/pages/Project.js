import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import { ManageSvg } from "../components/ManageSvg";
import PageScrollProgress from "../components/PageScrollProgress";

const Project = () => {
  return (
    <div className="project-page">
      <PageScrollProgress></PageScrollProgress>

      <Container className="w-9/12 p-4">
        <Row className="my-5">
          <Col>
            <Card className="w-full h-80">
              <Card.Body className="flex w-full h-full">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 mb-1 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">PlanT</Card.Title>
                    <Card.Subtitle className="mb-4">
                      여행 계획 공유 커뮤니티 웹 어플리케이션
                    </Card.Subtitle>
                    <Card.Text>
                      - DB를 연결을 통한 사용자 별 게시글 저장 및 불러오기,
                      좋아요, 북마크 등의 기능 구현
                    </Card.Text>
                    <Card.Text>- API 명세서 및 ERD 구성</Card.Text>
                    <Card.Text>- Gira를 이용한 커뮤니케이션, 프론트, 백, 데이터베이스 기본 환경 설정
                    명</Card.Text>
                    <Card.Text>- 소셜 로그인을 구현하여 어플리케이션 사용에 편리성 제공
                    </Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">CURA</Card.Title>
                    <Card.Subtitle className="mb-4">
                      병원용 환자 관리 시스템
                    </Card.Subtitle>
                    <Card.Text>C# .NET Winform</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">CURA</Card.Title>
                    <Card.Subtitle className="mb-4">
                      병원용 환자 관리 시스템
                    </Card.Subtitle>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">CURA</Card.Title>
                    <Card.Subtitle className="mb-4">
                      병원용 환자 관리 시스템
                    </Card.Subtitle>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">CURA</Card.Title>
                    <Card.Subtitle className="mb-4">
                      병원용 환자 관리 시스템
                    </Card.Subtitle>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">CURA</Card.Title>
                    <Card.Subtitle className="mb-4">
                      병원용 환자 관리 시스템
                    </Card.Subtitle>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">CURA</Card.Title>
                    <Card.Subtitle className="mb-4">
                      병원용 환자 관리 시스템
                    </Card.Subtitle>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">CURA</Card.Title>
                    <Card.Subtitle className="mb-4">
                      병원용 환자 관리 시스템
                    </Card.Subtitle>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
                  src={process.env.PUBLIC_URL + "/images/noimage.png"}
                  className="w-4/12"
                />
                <div className="flex flex-col justify-between w-full my-4 ml-12 pj-card-content">
                  <div className="flex flex-col items-start pj-card-content-text">
                    <Card.Title className="mb-4">CURA</Card.Title>
                    <Card.Subtitle className="mb-4">
                      병원용 환자 관리 시스템
                    </Card.Subtitle>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                    <Card.Text>프로젝트 간단 설명</Card.Text>
                  </div>
                  <Button
                    variant="outline-success"
                    className="w-12 h-12 rounded-full"
                  >
                    <a
                      href="https://github.com/jiiminhong/Cura.git"
                      target="_blank"
                      className="transition duration-500 hover:duration-500"
                      rel="noreferrer"
                    >
                      {ManageSvg[6].icon()}
                    </a>
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
