import express from "express"
import { ProductController } from "./mvc/controllers/product.controller.js"

const app = express()


const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

app.listen(3000)