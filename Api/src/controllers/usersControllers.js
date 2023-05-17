const { Usuario } = require('../db');

async function findOrCreateUser(
  email,
  name,
  password,
  favorite = [],
  direction,
  cart
) {
  const [newUser, created] = await Usuario.findOrCreate({
    where: {
      email: email,
    },
    defaults: {
      name,
      email,
      password,
      favorite,
      direction,
      cart,
    },
  });
  return [newUser, created];
}

async function updateUsers(name, password, favorite, direction, cart, email, banned) {
  const updateUser = await Usuario.update(
    {
      name,
      password,
      favorite,
      direction,
      cart,
      banned
    },
    {
      where: { email: email },
    }
  );
  return updateUser;
}


async function updateProfile(email, name, direction) {
  const updateProfile = await Usuario.update(
      {
        name,        
        direction
       
      },
      {
        where: { email: email },
      }
  );
  return updateProfile
}

async function updateImagen(imagen, email) {
  const updateImage = await Usuario.update(
      {
        imagen        
       
      },
      {
        where: { email: email },
      }
  );
  return updateImage
}




async function deleteUser(UsersId) {
  await Usuario.destroy({
    where: { email: UsersId },
  });
  return 'Usuario eliminado';
}
async function searchUsersByName(name) {
  const allUsers = await Usuario.findAll({
    where: {
      name: { [Op.substring]: name },
    },
  });
  return allUsers;
}
module.exports = {
  findOrCreateUser,
  updateUsers,
  deleteUser,
  searchUsersByName,
    updateProfile,
    updateImagen,

};
