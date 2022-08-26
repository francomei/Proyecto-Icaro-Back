const router = require('express').Router()
const api = require('../controllers/apiController')

router.get('/users', api.getusers)
router.post('/users', api.postUser)
router.post('/users/:username/messages', api.postMessage)

// router.get('/users/:username/messages/sent', api.getSentMessages)
// router.get('/users/:username/messages/inbox', api.getReceivedMessages)
// router.get('/users/:username', api.getUserData)

// router.post('/users/:username/messages', api.postMessage)

// router.get('/messages', api.getMessages)
// router.delete('/messages/:messageId', api.deleteMessage)

module.exports = router
