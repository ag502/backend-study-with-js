import express from "express"
import { ProductController } from "./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"
import { CashService } from "./mvc/controllers/services/cash.service.js"
import { ProductService } from "./mvc/controllers/services/product.service.js"

const app = express()

const productService = new ProductService() // 의존성 주입으로 한꺼번에 변경 가능, new 한번으로 모든 곳에서 재사용
const cashService = new CashService() // 의존성 주입으로 한꺼번에 변경 가능


// 상품API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권)API
const couponController = new CouponController(cashService);
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000)