import { useParams } from "react-router-dom";
import "../css/QuestionText.css";
import useFetch from "../hooks/useFetch";

export default function QuestionText() {
  const { no } = useParams();
  const data = useFetch(`http://localhost:4000/api/data/${no}`);
  console.log(data);

  return (
    <>
      <h3>{no}번 내용</h3>
      <div className="question-text">
        <div className="container">
          <p>작성자 : {data.writer}</p>
          <p>제목 : {data.title}</p>
          <p>문의 내용 : {data.text}</p>
        </div>
      </div>
    </>
  );
}
