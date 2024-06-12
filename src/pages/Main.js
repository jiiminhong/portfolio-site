import React from "react";

const Main = () => {
  return (
    <div className="w-auto h-auto">
      <div>
        <p className="font-bold text-2xl">안녕하세요</p>
        <p className="font-bold text-2xl">개발자 홍지민입니다.</p>
      </div>
      <img src={process.env.PUBLIC_URL + "/images/yulmu.jpeg"} alt="" width="50%" height="100px" />
    </div>
  );
};

export default Main;
