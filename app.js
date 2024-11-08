import mongoose from "mongoose";
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { TestCliente } from "./backend/Controllers/Clientes.Controller.js";
import { TestProducto } from "./backend/Controllers/Productos.Controller.js";
import { TestEmpleados } from "./backend/Controllers/Empleados.Controller.js";

dotenv.config()

mongoose.connect(process.env.urlbd)
.then(()=>{

    console.log("jala la conexion a la base")

})
.catch((error)=>{
    console.log("no jala la conexion a bd")
})

const app = express()
app.use(cors())
app.listen(4000, ()=>{
    console.log("escuchando correctamente el servidor local")
})

TestCliente()
TestProducto()
TestEmpleados()