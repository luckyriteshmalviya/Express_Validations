const express = require('express')
const router = express.Router()
const { basicController, detailController, fallbackController } = require('./controller.js')
const {getDetailValidation} = require('./validations.js')

router.get('/', basicController)

router.get('/details/:productId', getDetailValidation , detailController)

router.get('/*', fallbackController)

module.exports= router