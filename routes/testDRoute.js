const express = require('express')
const router = express.Router()

const testDController = require('../controllers/testDController')
router.get('/',testDController.index)
router.post('/show',testDController.show)
router.post('/store',testDController.store)
router.post('/update',testDController.update)
router.post('/delete',testDController.destroy)
module.exports = router