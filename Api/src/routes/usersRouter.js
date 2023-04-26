const { Router } = require('express');
const usersRouter = Router();
const { handleUsersAll, handleUserById } = require('../handler/usersHandler')
handleUsersAll,
  handleUserById,

usersRouter.get('/', handleUsersAll)
usersRouter.get('/:UsersId', handleUserById)


module.exports = usersRouter