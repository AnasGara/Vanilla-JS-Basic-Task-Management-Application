const express = require('express')
const router = express.Router()

const { login, signup, loggedUser } = require('../controllers/auth')

router.route('/login').post(login)
router.route('/signup').post(signup)
router.route('/logged').get(loggedUser)

module.exports = router
