const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

const login = (email) => {
  const accessToken = jwt.sign({ email }, jwtSecret)
  return { accessToken }
}

module.exports = login
