import express from "express"
import { ProductController } from "./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"

const app = express()


// 상품API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권)API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000)