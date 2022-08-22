const {Router} = require("express")
const {Anotaciones} = require("../db/db")
const router = Router()

router.post("/", async (req,res)=>{
    try {
        const {nombre} = req.body
        const anotacionCreado = await Anotaciones.create({
            nombre,
        })  
     return res.status(201).json(" Anotacion creado exitosamente")
    } catch (error) {
     return res.status(400).send("hubo un error al crear la anotacion")
    }
  
})
router.get("/", async (req,res)=>{
    try {
        const todosLasAnotaciones= await Anotaciones.findAll()
       return  res.status(200).json(todosLasAnotaciones) 
    } catch (error) {
        return res.status(404).send("no se pudo traer los usuarios")
    }
})
router.put("/:anotacionId", async(req,res)=>{
    try {
        
        const {anotacionId} = req.params
        const {nombre} = req.body
        const buscarCoincidencia = await Anotaciones.findOne({anotacionId})
        const updateRegistro = await buscarCoincidencia.update({
            nombre
        })
        res.status(200).json("datos actualizados con exito")
    } catch (error) {
        return res.status(404).send("surgio un error al modificar la anotacion")
    }

})
//cambios realizados en git
//cambios por segunda vez
router.delete("/:anotacionId", async (req,res)=>{
    try {
        const {anotacionId} = req.params
        const eliminarRegistroXId = await Anotaciones.destroy ({
            where: {id : anotacionId}
        })
        if(eliminarRegistroXId){

            return res.status(200).json("se elimino el registro con exito")
        }else{
            return res.status(200).json("se busco el registro para  eliminar el registro pero no se encontro")
        }
    } catch (error) {
        return res.status(400).json("surgio un problema al eliminar el registro")
    }
})

module.exports = router