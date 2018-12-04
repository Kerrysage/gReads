const express = require('express')
const app = express()
const port = 3111
const bodyParser = require('body-parser')
const knex = require('./db/connection')
const cors = require('cors')

app.get('/', (req, res, next) => {
    res.send('rawr')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/books', (req, res, next) => {
    knex('books')
        .orderBy('id', 'asc')
        .then(books => res.json({ books:books }))
})






app.listen(port, () => console.log(`I got you on ${port}`))