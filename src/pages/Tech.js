import React from "react";

import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { ManageSvg } from "../components/ManageSvg";
import PageScrollProgress from "../components/PageScrollProgress";

const Tech = () => {
  const techText = {
    csharp: "C#",
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    react: "React.js",
    node: "Node.js",
  };

  const renderTooltip = (id) => (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {techText[id]}
    </Tooltip>
  );

  // const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <div className="tech-page w-screen flex flex-col justify-center items-center">
      <PageScrollProgress></PageScrollProgress>

      {/* 주요 기술 스택 */}
      <div className="tech-major w-6/12 my-5">
        <div className="tech-major-title my-5 font-bold text-3xl">
          주요 기술 스택
        </div>
        <div className="tech-major-icons w-full h-30 px-10 py-4 flex justify-between bg-slate-200 rounded-3xl shadow-md">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("csharp")}
          >
            <div className="w-20 h-20 p-2.5 bg-slate-300 hover:bg-slate-400 transition duration-500 hove:duration-500 rounded-2xl shadow-inner">
              {ManageSvg[0].icon()}
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("html")}
          >
            <div className="w-20 h-20 p-2.5 bg-slate-300 hover:bg-slate-400 transition duration-500 hove:duration-500 rounded-2xl shadow-inner">
              {ManageSvg[1].icon()}
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("css")}
          >
            <div className="w-20 h-20 p-2.5 bg-slate-300 hover:bg-slate-400 transition duration-500 hove:duration-500 rounded-2xl shadow-inner">
              {ManageSvg[2].icon()}
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("js")}
          >
            <div className="w-20 h-20 p-2.5 bg-slate-300 hover:bg-slate-400 transition duration-500 hove:duration-500 rounded-2xl shadow-inner">
              {ManageSvg[3].icon()}
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("react")}
          >
            <div className="w-20 h-20 p-2.5 bg-slate-300 hover:bg-slate-400 transition duration-500 hover:duration-500 rounded-2xl shadow-inner">
              {ManageSvg[4].icon()}
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("node")}
          >
            <div className="w-20 h-20 p-2.5 bg-slate-300 hover:bg-slate-400 transition duration-500 hove:duration-500 rounded-2xl shadow-inner">
              {ManageSvg[5].icon()}
            </div>
          </OverlayTrigger>
        </div>
      </div>

      {/* 상세 기술 정보 */}
      <div className="tech-detail w-6/12 my-5">
        <div className="tech-detail-title my-5 font-bold text-3xl">
          상세 기술 정보
        </div>
        <div className="tech-detail-wrap">
          <div className="tech-detail my-5 flex">
            <p className="w-40 mr-20 font-bold text-2xl text-[#1A8754] text-end">
              Languages
            </p>
            <div className="flex">
              <ul className="w-40 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>HTML/CSS</li>
                <li>C#</li>
              </ul>
              <ul className="w-40 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>JavaScript</li>
                <li>C/C++</li>
              </ul>
              <ul className="w-40 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>TypeScript</li>
                <li>Java</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-0 bg-[#1A8754]" />

          <div className="tech-detail my-5 flex">
            <p className="w-40 mr-20 font-bold text-2xl text-[#1A8754] text-end">
              Frameworks &Libraries
            </p>
            <div className="w-120 flex">
              <ul className="w-40 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>React.js</li>
              </ul>
              <ul className="w-40 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>Node.js</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-0 bg-[#1A8754]" />

          <div className="tech-detail my-5 flex">
            <p className="w-40 mr-20 font-bold text-2xl text-[#1A8754] text-end">
              Databases
            </p>
            <div className="w-120 flex">
              <ul className="w-40  text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>MySQL</li>
              </ul>
              <ul className="w-40 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>MongoDB</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-0 bg-[#1A8754]" />

          <div className="tech-detail my-5 flex">
            <p className="w-40 mr-20 font-bold text-2xl text-[#1A8754] text-end">
              Tools & IDEs
            </p>
            <div className="flex">
              <ul className="w-40 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>VS Code</li>
                <li>Eclipse</li>
                <li>Unity</li>
              </ul>
              <ul className="w-40 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>Git</li>
                <li>Github</li>
                <li>Slack</li>
              </ul>
              <ul className="mx-4 text-start text-xl marker:text-[#1A8754] list-disc pl-5 space-y-2">
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
