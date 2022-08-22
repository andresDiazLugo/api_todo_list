const {DataTypes,Sequelize} = require("sequelize")

module.exports = sequelize=>{
    sequelize.define('Clientes',{
        nombre:{
            type: DataTypes.STRING,
            allowNull:false,
            vlidate:{
                notNull:{
                    msg: "El campo no puede ser nulo"
                }
            }
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        totaldeuda:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        telefono:{
            type:DataTypes.STRING,
            allowNull:true,
        }
    })
}