const {DataTypes} = require("sequelize")

module.exports = sequelize=>{
    sequelize.define('Anotaciones',{
        nombre:{
            type: DataTypes.STRING,
            allowNull:false,
            vlidate:{
                notNull:{
                    msg: "El campo no puede ser nulo"
                }
            }
        }
    })
}