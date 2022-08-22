const {Sequelize} = require('sequelize')
const usuarios = require('./models/Usuarios')
const proveedores = require('./models/Proveedores')
const clientes = require('./models/Clientes')
const productos = require('./models/Productos')

const sequelize = new Sequelize(`postgres://postgres:root@localhost:5432/supermercado`,{
    logging:false
});
productos(sequelize)
proveedores(sequelize)
clientes(sequelize)
usuarios(sequelize)

const {Productos,Proveedores,Clientes,Usuario} = sequelize.models

//-------------------------------asociaciones de uno a muchos------------------------------------------
//Usuario va a tener muchos clientes
//Cliente va a pertenecer a un solo usuario
Usuario.hasMany(Clientes,{foreignKey:"usuario_id"})
Clientes.belongsTo(Usuario,{foreignKey:"usuario_id"})
//usuario va a tener muchos proveedores
//proveedor va a partenecer a un solo usurio
Usuario.hasMany(Proveedores,{foreignKey:"usuario_id"})
Proveedores.belongsTo(Usuario,{foreignKey:"usuario_id"})
//clientes va a tener muchos productos comprados
//los productos comprados van a pertenecer a un solo cliente
Clientes.hasMany(Productos,{foreignKey:"cliente_id"})
Productos.belongsTo(Clientes,{foreignKey:"cliente_id"})




module.exports = {
    ...sequelize.models,
    sequelize
}
