const express = require('express')
const router = express.Router()

const coursMController = require('../controllers/coursMController')
router.get('/',coursMController.index)
router.post('/show',coursMController.show)
router.post('/store',coursMController.store)
router.post('/update',coursMController.update)
router.post('/delete',coursMController.destroy)
module.exports = router