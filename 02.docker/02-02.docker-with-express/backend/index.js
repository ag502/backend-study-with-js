import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import { options } from "./swagger/config.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup( swaggerJsdoc(options)));

app.get("/board", function (req, res) {
    // 1. DB접속 후 데이터를 조회 => 조회 했다고 가정
    const result = [
        {
            number: 1,
            writer: "철수",
            title: "제목입니다.",
            contents: "내용입니다."
        },
        {
            number: 2,
            writer: "영희",
            title: "제목입니다.",
            contents: "내용입니다."
        },
        {
            number: 3,
            writer: "미미",
            title: "제목입니다.",
            contents: "내용입니다."
        }
    ];

    // 2. DB에서 조회한 결과를 브라우저의 응답으로 주기
    res.send(result);
});

app.post("/board", function (req, res) {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req);
    console.log("===============");
    console.log(req.body);

    // 2. DB접속 후 데이터를 저장 => 저장했다고 가정

    // 3. DB에 저장된 결과를 브라우저에 응답으로 주기
    res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", function (req, res) {
    const myphone = req.body.phone; 

    // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
    const isValid = checkPhone(myphone);
    if (isValid === false) return;
  
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();
  
    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);

    res.send("인증완료!!!");
});

app.listen(4000);