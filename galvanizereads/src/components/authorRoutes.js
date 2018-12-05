const express = require('express')
const router = express.Router()
const controller = require('../controllers/authorController')

router.get('/', controller.getALL)
router.get('/', controller.getOne)



module.exports = router