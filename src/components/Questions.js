/* eslint-disable */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Questions.css";
import { useNavigate } from "react-router-dom";

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
    const title = e.target.title.value;
    const text = e.target.text.value;
    const writer = e.target.writer.value;
    const createdAt = e.target.createdAt.value;
    axios.post(SERVER_URL, { title, text, writer, createdAt });
    fetchData();
    alert("글이 작성되었습니다.");
    history("/question_list");
  };

  const history = useNavigate();

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
        <form onSubmit={onSubmitHandler}>
          <div className="input">
            <label htmlFor="title">제목</label>
            <br></br>
            <input name="title" id="title" placeholder="제목을 입력해주세요" />
          </div>
          <div className="input">
            <label htmlFor="writer">작성자</label>
            <br></br>
            <input
              name="writer"
              id="writer"
              placeholder="나중에 아이디로 대체됩니다."
            />
          </div>
          <div className="input">
            <label htmlFor="text">문의 내용</label>
            <br></br>
            <textarea name="text" id="text" placeholder="내용을 입력해주세요" />
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

export default Question;
