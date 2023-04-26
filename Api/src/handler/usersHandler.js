
const { Products } = require('../db');




const handleUsersAll = async (req, res) => {
  const { name } = req.query
 
}


const handleUserById = async (req, res) => {
  const { idUser } = req.params;
  
}




module.exports = {
  handleUsersAll,
  handleUserById,

}