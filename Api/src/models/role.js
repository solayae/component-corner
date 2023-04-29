const { DataTypes } = require('sequelize')

module.exports = (sequelize)=> {

    sequelize.define('Roles', {
        id: {
            type: DataTypes.STRING,
            primaryKey:true,
        },
        name: {
            type: DataTypes.STRING
        }
    })


}
