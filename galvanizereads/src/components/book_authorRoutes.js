const express = require('express')
const router = express.Router()
const controller = require('../controllers/book_authorController')

router.get('/', controller.getAll)


module.exports = router