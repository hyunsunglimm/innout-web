const express = require("express");
const app = express();
const cors = require("cors"); // app.use(cors()); 를 import 함.

app.use(cors()); // 데이터 전송시 cors 에러를 도와주는 라이브러리
app.use(express.json()); // parsing 을 도와주는 API
app.use(express.urlencoded({ extended: true }));

let no = 2;
const questionList = [
  // 샘플 데이터
  {
    no: 1,
    text: "물이 새요.",
    writer: "임통",
    createdAt: "2023.01.11",
  },
];

app.get("/api/data", (req, res) => {
  res.json(questionList);
});

app.post("/api/data", (req, res) => {
  const { text, writer, createdAt } = req.body;
  questionList.push({
    no: no++,
    text,
    writer,
    createdAt,
  });
  return res.send("success");
});

app.listen(4000, () => {
  console.log("server start!!");
});

// 이번엔 되라.
