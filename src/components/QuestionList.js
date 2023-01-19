// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const SERVER_URL = "http://localhost:4000/api/data";

import { Link } from "react-router-dom";
import "../css/QuestionList.css";
import styled from "styled-components";
// import Detail from "./Detail";

import useFetch from "../hooks/useFetch";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    font-weight: bold;
  }
`;

function QuestionList() {
  const data = useFetch("http://localhost:4000/api/data");

  return (
    <>
      {/* 여기부터 작성글 (나중엔 데이터로 받아와야함.)*/}
      <section className="notice">
        <div className="page-title">
          <div className="container">
            <h3>문의 게시판</h3>
          </div>
        </div>

        {/* 검색 기능 (만들어야함) */}
        <div id="board-search">
          <div className="container">
            <div className="search-window">
              <form action="">
                <div className="search-wrap">
                  <input
                    id="search"
                    type="search"
                    name=""
                    placeholder="검색어를 입력해주세요."
                    // value=""
                  />
                  <button type="submit" className="btn btn-dark">
                    검색
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* 리스트 에리어 */}
        <div id="board-list">
          <div className="container">
            <table className="board-table">
              <thead>
                <tr>
                  <th scope="col" className="th-num">
                    번호
                  </th>
                  <th scope="col" className="th-title">
                    제목
                  </th>
                  <th scope="col" className="th-date">
                    작성자
                  </th>
                  <th scope="col" className="th-date">
                    등록일
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((question) => (
                  <tr key={question.no}>
                    <td>{question.no}</td>
                    <th>
                      <Link to={`/questions/${question.no}`}>
                        {question.title}
                      </Link>
                    </th>
                    <td>{question.writer}</td>
                    <td>{question.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="writeBtn">
        <StyledLink to="/questions">
          <button className="question-button">문의 작성</button>
        </StyledLink>
      </div>
    </>
  );
}

export default QuestionList;
