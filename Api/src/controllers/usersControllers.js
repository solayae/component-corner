const {Usuario}=require('../db')

async function findOrCreateUser(email, name, password, favorite, direction, cart) {
    const [newUser, create] = await Usuario.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          name,
          password,
          favorite,
          direction,
          cart,
        },
    });
    return newUser, create 
}

async function updateUsers(name, password, favorite, direction, cart, email) {
    const updateUser = await Usuario.update(
        {
          name,
          password,
          favorite,
          direction,
          cart,
        },
        {
          where: { email: email },
        }
    );
    return updateUser
}

async function deleteUser(UsersId) {
    await Usuario.destroy({
        where: { email: UsersId },
    });
    return "Usuario eliminado"
}
async function searchUsersByName(name) {
    const allUsers = await Usuario.findAll({
        where: {
          name: { [Op.substring]: name },
        },
    });
    return allUsers
}
module.exports = {
    findOrCreateUser,
    updateUsers,
    deleteUser,
    searchUsersByName
}