const express = require("express")
const path = require("path")
const userRouter = require('./users')

const app = express()
const port = 5000
const basePath = path.join(__dirname, "templates")

app.use(express.static("public"))

// read body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(
    express.json()
)

app.use("/user", userRouter)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
    res.sendFile(`${basePath}/404.html`)
})

app.listen(port, () =>{
    console.log(`App running on https://localhost:${port}`)
})