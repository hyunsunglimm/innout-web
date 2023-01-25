/* eslint-disable */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Questions.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UpdateQuestion() {
  const { no } = useParams();
  const data = useFetch(`http://localhost:4000/api/data/${no}`);

  const today = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    return `${year}.${month}.${date}`;
  };

  return (
    <>
      <h3>문의 게시판</h3>

      <div className="container">
        <form>
          <div className="input">
            <label htmlFor="title">제목</label>
            <br></br>
            <input name="title" id="title" defaultValue={data.title} />
          </div>
          <div className="input">
            <label htmlFor="writer">작성자</label>
            <br></br>
            <input name="writer" id="writer" defaultValue={data.writer} />
          </div>
          <div className="input">
            <label htmlFor="text">문의 내용</label>
            <br></br>
            <textarea name="text" id="text" defaultValue={data.text} />
          </div>
          {/* 후에 로그인 데이터 (ID)로 가져옴 */}
          <div className="input">
            <label htmlFor="createdAt">작성일시</label>

            <input name="createdAt" id="createdAt" defaultValue={today()} />
          </div>
          {/* 후에 현재시각으로 자동 입력 */}
          <input type="submit" value="저장" />
        </form>
      </div>
    </>
  );
}

export default UpdateQuestion;
