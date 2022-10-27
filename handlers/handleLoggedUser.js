const User = require('../models/User')
const handleAccessToken = require('./handleAccessToken')

const handleLoggedUser = async (args) => {
  const [hasErrors, payload] = await handleAccessToken(args)
  if (hasErrors) return [hasErrors, payload]

  const user = await User.findOne({ email: payload.email })
  if (!user) return [true, { msg: 'check ur credentials' }]

  return [false, { ...payload, userId: user.id }]
}

module.exports = handleLoggedUser
