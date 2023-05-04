const mongoose = require("mongoose")

const Schema = mongoose.Schema

const listSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    ItemId: {
        type: String,
        required: true
    }
})

const List = mongoose.model("List", listSchema)

module.exports = List