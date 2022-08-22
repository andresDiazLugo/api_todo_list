const express = require("express");
const {sequelize} = require("./db/db")
const anotacionesRouter = require("./routes/anotaciones")
const app = express();



app.use(express.json());
app.set("PORT",3001)


// app.use(express.urlencoded({extended:false}))
app.get('/', (req,res)=>{res.json("hola mundo")})


app.use('/api/anotaciones',anotacionesRouter)


//arrancamos nuestro servidor
app.listen(app.get('PORT'),()=>{
        console.log(`corriendo servidor en el puerto 3001`)
        sequelize.sync({force:true}).then(()=>{
            console.log("nos conectamos con exito a la base de datos ")
        }).catch((error)=>{
            console.log("se produjo un error de conexion" +error)
        })
})