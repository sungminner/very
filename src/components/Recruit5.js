import React from "react";
import "css/recruit5.css";

const Recruit5 = () => {
  return (
    <div className="container">
      <div className="r5-grid">
        <p className="r5-grid__title">VERY 모집 기간</p>
        <p className="r5-grid__title">VERY 지원 자격</p>
        <p className="r5-grid__description">
          * 춘계 정기 모집 : 1학기 개강일 3주전부터 모집 예정
          <br />* 추계 정기 모집 : 2학기 개강일 3주전부터 모집 예정
        </p>
        <p className="r5-grid__description">
          * 연세대학교 동문(학부생, 졸업생) 중 창업에 관심이 있는 자
          <br />* 매주 화요일 오후 7시에 진행되는 정규 세션에 참가할 수 있는 자
          <br />* 창업에 관심이 있으며 VERY의 활동에 열정으로 임할 자
        </p>
      </div>
    </div>
  );
};

export default Recruit5;
