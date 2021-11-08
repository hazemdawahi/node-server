const express = require('express')
const router = express.Router()

const coursDController = require('../controllers/coursDController')
router.get('/',coursDController.index)
router.post('/show',coursDController.show)
router.post('/store',coursDController.store)
router.post('/update',coursDController.update)
router.post('/delete',coursDController.destroy)
module.exports = router