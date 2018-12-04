const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


app.get('/', (req, res, next) => {
    res.send('rawr')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())








app.listen(port, () => console.log(`I got you on ${port}`))