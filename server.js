const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hwllo World</h1>")
})

app.listen(port, () => console.log("Server running in port " + port))
