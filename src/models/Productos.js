const {DataTypes, Sequelize} = require('sequelize')

module.exports= (sequelize)=>{
    sequelize.define('Productos',{
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
}