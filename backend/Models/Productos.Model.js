import { Schema, model } from "mongoose";

const EsquemaProductos = new Schema({
    name:{
        type: String
    },

    price:{
        type: Number

    },

    category:{
        type: String

    },

  
   



})

export const modeloProductos = new model("Tabla de productos", EsquemaProductos)