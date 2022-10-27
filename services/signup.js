const bcrypt = require('bcrypt')
const User = require('../models/User')

const signup = async ({ email, password }) => {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)

  const newUser = await User.create({ email, password: hashedPassword })

  return { userId: newUser.id }
}

module.exports = signup
