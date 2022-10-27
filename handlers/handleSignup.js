const bcrypt = require('bcrypt')
const User = require('../models/User')
const { emailRegex, passwordRegex } = require('../utils/regex')

const validateSignupInput = (email, password) => {
  if (!emailRegex.test(email)) return [true, { email: 'invalid email format' }]
  if (!passwordRegex.test(password)) {
    const wrongPasswordMessage =
      'Minimum eight characters, at least one letter and one number'
    return [true, { password: wrongPasswordMessage }]
  }
  return [false, {}]
}

const handleSignup = async (args) => {
  const [hasErrors, payload] = validateSignupInput(args.email, args.password)
  if (hasErrors) return [hasErrors, payload]

  const user = await User.findOne({ email: args.email })
  if (user) return [true, { msg: 'user already exist' }]

  return [false, {}]
}

module.exports = handleSignup
