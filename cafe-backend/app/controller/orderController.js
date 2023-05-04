const Order = require("../models/orders")
const List = require("../models/list")

const orderController = {}

orderController.list = (req, res) => {
    Order.find()
        .then((order) => {
            res.json(order)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

orderController.search = (req, res) => {
    const value = req.params.value
    Order.find()
        .then((data) => {
            const name = data.filter(ele => ele.name.includes(value))
            if (name.length > 0) {
                res.json(name)

            } else {
                res.json({
                    message: "This item is currently unavailable!"
                })
            }

        })
        .catch((err) => {
            res.json(err.message)
        })

}

orderController.get = (req, res) => {
    List.find()
        .then((order) => {
            res.json(order)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

orderController.add = (req, res) => {
    const body = req.body
    const list = new List(body)
    list.save()
        .then((order) => {
            res.json({
                order: order,
                message: "Your Oder Is Added!"
            })
        })
        .catch((err) => {
            res.json(err.message)
        })

}

orderController.remove = (req, res) => {
    const id = req.params.id
    List.findOne({ _id: id })
        .then((order) => {
            res.json({
                order: order,
                message: `your ${order.name} is ready`
            })
        })
        .catch((err) => {
            res.json(err.message)
        })
}

orderController.radio = (req, res) => {
    const value = req.params.value

    Order.find()
        .then((data) => {
            const name = data.filter(ele => ele.type === value)
            res.json(name)

        })
        .catch((err) => {
            res.json(err.message)
        })

}

orderController.data = (req, res) => {
    Order.find()
        .then((order) => {
            res.json(order)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

module.exports = orderController
