const handleLogin = require('../handlers/handleLogin')
const loginService = require('../services/login')

const handleSignup = require('../handlers/handleSignup')
const signupService = require('../services/signup')

const handleAccessToken = require('../handlers/handleAccessToken')
const loggedUserService = require('../services/loggedUser')

const login = async (req, res) => {
  const [hasErrors, handlerPayload] = await handleLogin(req.body)
  if (hasErrors) {
    return res.json({
      success: false,
      payload: handlerPayload,
    })
  }

  const { email } = req.body
  const servicePayload = loginService(email)
  return res.json({
    success: true,
    payload: servicePayload,
  })
}

const signup = async (req, res) => {
  const [hasErrors, handlerPayload] = await handleSignup(req.body)
  if (hasErrors) {
    return res.json({
      success: false,
      payload: handlerPayload,
    })
  }

  const servicePayload = await signupService(req.body)
  return res.json({
    success: true,
    payload: servicePayload,
  })
}

const loggedUser = async (req, res) => {
  const [hasErrors, handlerPayload] = await handleAccessToken(req.headers)
  if (hasErrors) {
    return res.json({
      success: false,
      payload: handlerPayload,
    })
  }

  const { email } = handlerPayload
  const servicePayload = await loggedUserService(email)
  return res.json({
    success: true,
    payload: servicePayload,
  })
}

module.exports = { login, signup, loggedUser }
