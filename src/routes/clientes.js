const {Router} = require("express")
const {Clientes} = require("../db")
const router = Router()

router.post("/", async (req,res)=>{
    try {
        const {nombre,apellido,totaldeuda,telefono} = req.body
        const clienteCreado = await Clientes.create({
            nombre,
            apellido,
            totaldeuda,
            telefono            
        })  
     return res.status(200).send("cliente creado exitosamente")
    } catch (error) {
     return res.status(404).send("hubo un error al crear al cliente")
    }
  
})
router.get("/", async (req,res)=>{
    try {
        const todosLosClientes= await Clientes.findAll()
        res.status(200).json(todosLosClientes) 
    } catch (error) {
        res.status(400).send("no se pudo traer los usuarios")
    }
})
router.put("/:clienteId", async(req,res)=>{
    try {
        
        const {clienteId} = req.params
        const {nombre,apellido,totaldeuda,telefono} = req.body
        const buscarCoincidencia = await Clientes.findOne({clienteId})
        const updateRegistro = await buscarCoincidencia.update({
            nombre,
            apellido,
            totaldeuda,
            telefono
        })
        res.send("datos actualizados con exito")
    } catch (error) {
        return res.status(404).send("surgio un error al modificar al cliente")
    }

})
//cambios realizados en git
router.delete("/:clienteId", (req,res)=>{})

module.exports = router