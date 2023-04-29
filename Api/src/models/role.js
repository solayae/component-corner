const { DataTypes } = require('sequelize')

module.exports = (sequelize)=> {

    sequelize.define('Role', {
        id: {
            type: DataTypes.STRING,
            primaryKey:true,
        },
        name: {
            type: DataTypes.STRING
        }
    })


}
