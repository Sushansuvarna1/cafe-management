const express = require("express")
const router = express.Router()
const orderController = require("../app/controller/orderController")

router.get("/api/order", orderController.list)
router.get("/api/ordersearch/:value", orderController.search)
router.post("/api/orderadd", orderController.add)
router.get("/api/orderget", orderController.get)
router.get("/api/orderremove/:id", orderController.remove)
router.get("/api/radio/:value", orderController.radio)
router.get("/api/orderlist", orderController.data)

module.exports = router