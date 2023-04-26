const { Router } = require('express');
const usersRouter = Router();
const { handleUsersAll, handleUserById, handleUserCreate, handleUpdateUser } = require('../handler/usersHandler')


usersRouter.get('/', handleUsersAll)
usersRouter.get('/:UsersId', handleUserById)
usersRouter.post('/', handleUserCreate)
usersRouter.put('/',handleUpdateUser)


module.exports = usersRouter