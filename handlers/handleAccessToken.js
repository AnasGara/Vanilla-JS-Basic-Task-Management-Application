const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET
const handleAccessToken = async (args) => {
  const authHeader = args.authorization || ''
  if (!authHeader)
    return [true, { msg: 'Authorization header must be provided' }]

  const token = authHeader.split('Bearer ')[1]
  if (!token)
    return [true, { msg: 'Authorization token must be: Bearer [token]' }]

  const payload = { email: '' }
  try {
    const { email } = jwt.verify(token, jwtSecret)
    payload.email = email
  } catch (err) {
    console.log(err)
    return [true, { msg: 'Invalid/Expired token' }]
  }

  return [false, payload]
}

module.exports = handleAccessToken