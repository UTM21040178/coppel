import { modeloCliente } from "../Models/Clientes.model.js";

modeloCliente.create({
    name: "Lalo",

    apepat:"Lara",

    Edad: 21,

    Correo:"utm21040178@utma.edu.mx"
})

export const TestCliente = ()=>{
    console.log("funciona el controlador de clientes")
}