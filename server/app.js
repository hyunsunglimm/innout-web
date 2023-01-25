const express = require("express");
const app = express();
const cors = require("cors"); // app.use(cors()); 를 import 함.

app.use(cors()); // 데이터 전송시 cors 에러를 도와주는 라이브러리
app.use(express.json()); // parsing 을 도와주는 API
app.use(express.urlencoded({ extended: true }));

let no = 4; // 이게 없어서 서버가 안됐었음 ...
const questionList = [
  // 샘플 데이터
  {
    no: 1,
    title: "가가입니다.",
    text: "물이 새요.",
    writer: "가가201호",
    createdAt: "2023.01.11",
  },
  {
    no: 2,
    title: "이지입니다.",
    text: "주차차단기가 안됩니다.",
    writer: "이지201호",
    createdAt: "2023.01.14",
  },
  {
    no: 3,
    title: "보아스입니다.",
    text: "옆 호실이 너무 시끄럽습니다.",
    writer: "보아스201호",
    createdAt: "2023.01.18",
  },
];

app.get("/api/data", (req, res) => {
  res.json(questionList);
});

for (let i = 1; i <= questionList.length; i++) {
  app.get(`/api/data/${i}`, (req, res) => {
    res.json(questionList[i - 1]);
  });
}

app.post("/api/data/", (req, res) => {
  const { title, text, writer, createdAt } = req.body;
  questionList.push({
    no: no++,
    title,
    text,
    writer,
    createdAt,
  });
  return res.send("success");
});

app.listen(4000, () => {
  console.log("server start!!");
});
