import { useParams } from "react-router-dom";

export default function QuestionText() {
  const { no } = useParams();

  return (
    <>
      <h2>내용 {no}</h2>
    </>
  );
}
