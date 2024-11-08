import { modeloProductos } from "../Models/Productos.Model.js"

modeloProductos.create({
    name: "Leche",

    price:20,

   
    category :"lacteos"
})

export const TestProducto = ()=>{
    console.log("funciona el controlador de productos")
}