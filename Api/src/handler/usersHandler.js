const { findOrCreateUser, updateUsers, deleteUser, searchUsersByName } = require("../controllers/usersControllers");
const { Usuario } = require("../db");


const handleUsersAll = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const allUsers = await Usuario.findAll();
      return res.status(200).json(allUsers);
    } else {
      
      const allUsers = searchUsersByName(name)
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
  const { email, name, password, favorite, direction, cart } = req.body;
  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ error: "faltas ingresar email y/o password" });

    findOrCreateUser(email, name, password, favorite, direction, cart);

    if (!create)
      return res.status(200).json({ message: "Ya existe el usuario" });
    
    return res.status(201).json({ message: "El usuario se ha creado con éxito!" });
  
  } catch (error) {
  
    res.status(400).json({ error: error.message });
  }
};


const handleUpdateUser = async (req, res) => {
  const { email, name, password, favorite, direction, cart } = req.body;
  try {
    if (!email) return res.status(400).json({ error: "falta el EMAIL" });
    
    const updateUser = await updateUsers(name, password, favorite, direction, cart, email)

    return updateUser[0] > 0
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
    deleteUser(UsersId)
    res.status(200).json({ message: "el usuario ha sido eliminado" });
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
};
