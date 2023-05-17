const {
  findOrCreateUser,
  updateUsers,
  deleteUser,
  searchUsersByName,
  updateProfile,
    updateImagen,
} = require('../controllers/usersControllers');
const { Usuario } = require('../db');

const handleUsersAll = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const allUsers = await Usuario.findAll();
      return res.status(200).json(allUsers);
    } else {
      const allUsers = searchUsersByName(name);
      return res.status(200).json(allUsers);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleUserById = async (req, res) => {
  const { UsersId } = req.params;
  try {
    const user = await Usuario.findByPk(UsersId);

    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleUserCreate = async (req, res) => {
  const propNecesarias = ['email', 'name', 'password', 'direction'];
  const propFaltantes = [];
  propNecesarias.forEach((prop) => {
    if (!req.body[prop]) {
      propFaltantes.push(prop);
    }
  });
  if (propFaltantes.length > 0) {
    const faltantes = `Campos obligatorios: ${propFaltantes.join(', ')}`;
    res.status(400).json({ error: faltantes });
  } else {
    const { email, name, password, favorite, direction, cart } = req.body;
    try {
      const [newProduct, created] = await findOrCreateUser(
        email,
        name,
        password,
        favorite,
        direction,
        cart
      );
      created
        ? res
            .status(200)
            .json({ message: `El usuario ${email} se ha creado exitosamente` })
        : res.status(200).json({ message: `Ya existe usuario con ${email}` });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const handleUpdateUser = async (req, res) => {
  const { email, name, password, favorite, direction, cart , banned } = req.body;
  try {
    if (!email) return res.status(400).json({ error: 'falta el EMAIL' });

    const updateUser = await updateUsers(
      name,
      password,
      favorite,
      direction,
      cart,
      email,
      banned
    );

    return updateUser
      ? res
          .status(200)
          .json({ message: 'Se actualizo el usuario correctamente!' })
      : res.status(400).json({ message: 'No se actualizo ningun usuario' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const handleUpdateProfile = async (req, res) => {
  const { email, name, direction } = req.body;
  try {
    if (!email) return res.status(400).json({ error: "falta el EMAIL" });
    
    const profileUpdate = await updateProfile(email, name, direction)

    return profileUpdate[0] > 0
      ? res
          .status(200)
          .json({ message: "Se actualizo el usuario correctamente!" })
      : res.status(400).json({ message: "No se actualizo ningun usuario" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleUpdateImagen = async (req, res) => {
  const { email, imagen } = req.body;
  try {
    if (!email) return res.status(400).json({ error: "falta el EMAIL" });
    
    const imagenUpdate = await updateImagen(imagen, email)
    

    return imagenUpdate[0] > 0
      ? res
          .status(200)
          .json({ message: "Se actualizo el usuario correctamente!" })
      : res.status(400).json({ message: "No se actualizo ningun usuario" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const handleDeleteUser = async (req, res) => {
  const { UsersId } = req.params;
  try {
    deleteUser(UsersId);
    res.status(200).json({ message: 'el usuario ha sido eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleUsersAll,
  handleUserById,
  handleUserCreate,
  handleUpdateUser,
  handleDeleteUser,
  handleUpdateImagen,
  handleUpdateProfile
};
