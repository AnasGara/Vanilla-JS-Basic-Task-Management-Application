const getTask = require('../services/getTask')
const handleLoggedUser = require('./handleLoggedUser')

const checkUserInput = async ({ task, completed }) => {
  if (completed && !(typeof completed === 'boolean')) {
    return [true, { completed: 'must be a boolean' }]
  }

  if (task && !(typeof task === 'string')) {
    return [true, { task: 'must be a string' }]
  }

  return [false, {}]
}

const handleUpdateTask = async (headers, taskId, newTask) => {
  const [hasErrors, payload] = await await handleLoggedUser(headers)
  if (hasErrors) return [true, payload]

  const { task } = await getTask(payload.userId, taskId)
  if (!task) return [true, { msg: 'invalid taskId' }]

  const [notValid, inputValidationPayload] = await checkUserInput(newTask)
  if (notValid) return [true, inputValidationPayload]

  return [false, {}]
}

module.exports = handleUpdateTask
