import React from "react";
import Navigation from "components/Navigation";
import "css/awards1.css";

const Awards1 = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="a1-hero">
          <p className="a1-hero__1">공모전 입상 수</p>
          <p className="a1-hero__2">공모전 입상</p>
          <p className="a1-hero__3">
            VERY는 다양한 무대의 주역에 자리해 왔습니다.
            <br />
            회원들의 빛났던 순간들을 이 자리에서 공개합니다.
          </p>
        </div>
      </div>
      <div className="a1-stripe">
        <div>
          <p className="a1-stripe__text">알럼나이 기업 수</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="7"
            viewBox="0 0 23 7"
          >
            <rect
              id="사각형_318"
              data-name="사각형 318"
              width="23"
              height="7"
              fill="#d3d3d3"
            />
          </svg>
        </div>
        <p className="a1-stripe__number">36</p>
      </div>
    </>
  );
};

export default Awards1;