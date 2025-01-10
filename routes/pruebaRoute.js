const express = require('express')

const{prueba,pruebasuma} = require('../controllers/pruebaController')

const router = express.Router()

router.get('/',prueba )
router.get('/suma', pruebasuma)

module.exports = router