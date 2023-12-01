const express = require("express")
const path = require("path")
const router = express.Router()

const basePath = path.join(__dirname, "../templates")
const app = express()

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/usersadd.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    console.log(req.body.name)
    res.sendFile(`${basePath}/usersadd.html`)
})

module.exports = router