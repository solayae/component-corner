const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   const Comentario = sequelize.define('Comentario', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    
  },
  
  {
    timestamps: false,
  }
  );
};
