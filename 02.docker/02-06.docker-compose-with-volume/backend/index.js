import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import { options } from "./swagger/config.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";


const app = express();

app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup( swaggerJsdoc(options)));

app.get("/board", async function (req, res) {
    // 1. DB접속 후 데이터를 조회 => 조회
    const result = await Board.find();


    // 2. DB에서 조회한 결과를 브라우저의 응답으로 주기
    res.send(result);
});

app.post("/board", async function (req, res) {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req);
    console.log("===============");
    console.log(req.body);
    

    // 2. DB접속 후 데이터를 저장 => 저장
    const board = new Board({
        writer: req.body.writer,
        title: req.body.title,
        contents: req.body.contents
    });
    await board.save();

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

mongoose.connect("mongodb://database:27017/mydocker")
    .then(() => console.log("MongoDB Connected"))
    .catch(() => console.log("MongoDB Connection Error"))

app.listen(4000);