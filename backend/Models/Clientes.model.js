import { Schema, model } from "mongoose";

export const EsquemaGeneral = new Schema({
    name:{
        type: String
    },

    apepat:{
        type: String

    },

    edad:{
        type: Number

    },

    correo:{
        type: String

    }




})

export const modeloCliente = new model("Tabla de clientes", EsquemaGeneral)