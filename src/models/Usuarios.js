const {DataTypes} = require("sequelize")


module.exports= (sequelize)=>{
    sequelize.define('Usuario',{
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg:"el campo no puede estar vacio"
                }
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:"El campo no puede estar vacio"
                }
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg:"la contraseña no puede estar vacia"
                }
            }
        }
    }
    )
}