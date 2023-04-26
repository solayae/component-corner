
const { Usuario } = require('../db');




const handleUsersAll = async (req, res) => {
  const { name } = req.query
 
}


const handleUserById = async (req, res) => {
  const { idUser } = req.params;
  
}

/* 
{
      where: {
        name: name,
      },
      defaults: {
        image,
        name,
        brand,
        detail,
        price,
        category,
        stock
      }
    }
*/


const handleUserCreate = async (req, res) => {
  const { email, name, password, favorite, direction, cart } = req.body
  try {
    if (!email || !password) return res.status(400).json({ error: "faltas ingresar email y/o password" })
    const [newUser, create] = await Usuario.findOrCreate({
      where: {
        email:email,
      },
      defaults: {
        name,
        password,
        favorite,
        direction,
        cart
      }
    })
    if (!create) return res.status(200).json({ message: 'Ya existe el usuario' })
    return res.status(201).json({message: 'El usuario se ha creado con éxito!'})

  } catch (error) {
    res.status(400).json({error: error.message})
  }

}


module.exports = {
  handleUsersAll,
  handleUserById,
  handleUserCreate
}