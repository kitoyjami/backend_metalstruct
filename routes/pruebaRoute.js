const express = require('express')

const{prueba} = require('../controllers/pruebaController')

const router = express.Router()

router.get('/',prueba )

module.exports = router