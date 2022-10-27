const User = require('../models/User')

const loggedUser = async (email) => {
  const loggedUser = await User.findOne({ email })
  return { user: { ...loggedUser._doc, password: null } }
}

module.exports = loggedUser
