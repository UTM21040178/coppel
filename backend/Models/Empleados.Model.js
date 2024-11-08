import { EsquemaGeneral } from "./Clientes.model.js";
import { model, Model } from "mongoose";

export const modeloEmpleado = new model("Tabla de empleados", EsquemaGeneral)