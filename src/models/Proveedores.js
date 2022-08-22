const {DataTypes,Sequelize} = require("sequelize")

module.exports = Sequelize=>{
    Sequelize.define('Proveedores',{
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "El campo mo puede ser nulo"
                }
            }
        },
        deuda:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notNull:{
                    msg: "El campo no puede ser nulo"
                }
            }
        },
        telefono:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg: "El campo no puede ser nulo"
                }
            }
        }
    })
}