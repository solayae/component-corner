const { Router } = require('express');
const usersRouter = Router();
const { handleUsersAll, handleUserById, handleUserCreate } = require('../handler/usersHandler')


usersRouter.get('/', handleUsersAll)
usersRouter.get('/:UsersId', handleUserById)
usersRouter.post('/',handleUserCreate)


module.exports = usersRouter