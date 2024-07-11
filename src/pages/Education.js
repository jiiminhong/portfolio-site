import React from "react";

const Education = () => {
  return (
    <div className="education-page w-screen h-[48rem] flex flex-col justify-center items-center">
      {/* 학력*/}
      <div className="edu-list w-6/12 my-5">
        <div className="edu-title my-5 font-bold text-3xl">학력 및 교육</div>

        <div className="edu-list my-5 flex">
          <p className="edu-list-title w-40 mr-20 font-bold text-2xl text-gray-400 text-end">
            2019-2024
          </p>
          <div className="edu-list-detail flex flex-col">
            <p className="w-40 font-bold text-2xl text-[#1A8754] text-start">
              ##대학교
            </p>
            <p className="w-full text-start text-lg">
              컴퓨터공학 & 소프트웨어공학 복수전공 학사 졸업
            </p>
          </div>
        </div>

        <div className="edu-list my-5 flex">
          <p className="edu-list-title w-40 mr-20 font-bold text-2xl text-gray-400 text-end">
            2024.02-현재
          </p>
          <div className="edu-list-detail flex flex-col">
            <p className="w-40 font-bold text-2xl text-[#1A8754] text-start">
              KOSTA
            </p>
            <p className="w-full text-start text-lg">
              Node.js 기반 DevOps 개발자
            </p>
          </div>
        </div>
      </div>

      {/* 자격증*/}
      <div className="edu-list w-6/12 my-5">
        <div className="edu-title my-5 font-bold text-3xl">자격증</div>

        <div className="certificate-list my-5 flex justify-center">
          <p className="certificate-list-title w-40 mr-20 font-bold text-2xl text-gray-400 text-end">
            2024
          </p>
          <p className="certificate-list-detail w-40 font-bold text-2xl text-[#1A8754] text-start">
            정보처리기사
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
