const express = require('express')
const router = express.Router()

const testMController = require('../controllers/testMController')
router.get('/',testMController.index)
router.post('/show',testMController.show)
router.post('/store',testMController.store)
router.post('/update',testMController.update)
router.post('/delete',testMController.destroy)
module.exports = router