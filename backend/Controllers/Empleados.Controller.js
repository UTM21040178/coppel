import { modeloEmpleado } from "../Models/Empleados.Model.js";

modeloEmpleado.create({

    name:"patricia",

    apepat:"gonzalez",

    edad: 53,

    correo:"patricia@coppel.com"
})

export const TestEmpleados = ()=>{

    console.log("funciona la conexion del controlador empleados")
}