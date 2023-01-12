// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const SERVER_URL = "http://localhost:4000/api/data";

import { Link } from "react-router-dom";
import "../css/QuestionList.css";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    font-weight: bold;
  }
`;

function QuestionList() {
  return (
    <>
      <h1>문의 게시판</h1>
      <hr></hr>
      <hr></hr>
      <div className="container">
        <div className="top">
          <span className="no">번호</span>
          <span className="titlee">제목</span>
          <hr></hr>
          <hr></hr>
        </div>
        <div className="bottom">
          <span className="writer">작성자</span>
          <span className="date">작성일</span>
          <hr></hr>
          <hr></hr>
        </div>
      </div>
      {/* 여기부터 작성글 */}
      <div className="container">
        <div className="top">
          <span className="no">1</span>
          <span className="titlee">
            <StyledLink
              to="/questions"
              // style={{ textDecoration: "none", color: "black" }}
            >
              도배가 필요합니다.
            </StyledLink>
          </span>
          <hr></hr>
          <hr></hr>
        </div>
        <div className="bottom">
          <span className="writer">가가201xxx</span>
          <span className="date">2023.01.12</span>
          <hr></hr>
          <hr></hr>
        </div>
      </div>
    </>
  );
}

export default QuestionList;
