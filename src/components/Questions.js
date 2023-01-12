/* eslint-disable */
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/Questions.css";

const SERVER_URL = "http://localhost:4000/api/data";

// function Item({ item }) {
//   return (
//     <div className="div">
//       <span>{item.id}</span>
//       <span className="title">{item.title}</span>
//       <span>{item.writer}</span>
//       <span>{item.createdAt}</span>
//     </div>
//   );
// }

function Question() {
  const [questionList, setQuestionList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setQuestionList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const writer = e.target.writer.value;
    const createdAt = e.target.createdAt.value;
    axios.post(SERVER_URL, { text, writer, createdAt });
    fetchData();
  };

  return (
    <div>
      <h1>문의 게시판</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="text">문의 내용 : </label>
        <input name="text" id="text" />
        <label htmlFor="writer">작성자 : </label>{" "}
        <input name="writer" id="writer" />
        {/* 후에 로그인 데이터 (ID)로 가져옴 */}
        <label htmlFor="createdAt">작성일시 : </label>
        <input name="createdAt" id="createdAt" />
        {/* 후에 현재시각으로 자동 입력 */}
        <input type="submit" value="저장" />
      </form>
      {/* 여기서부터 페이지 출력 */}
      {questionList?.map((question) => (
        <div key={question.no}>
          <div>{question.no}</div>
          <div>{question.text}</div>
          <div>{question.writer}</div>
          <div>{question.createdAt}</div>
        </div>
      ))}
    </div>
  );
}

export default Question;
