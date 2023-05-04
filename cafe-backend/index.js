const express = require("express")
const cors = require("cors")
const port = 3090
const app = express()
const router = require("./config/routes")
const configDB = require("./config/database")

app.use(express.json())
app.use(cors())
configDB()
app.use(router)

app.listen(port, () => {
    console.log("server is connected to port", port)
})