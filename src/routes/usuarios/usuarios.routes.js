import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  deleteUsuario,
  createUsuario,
} from "../../controllers/usuarios/usuarios.controller.js";

const router = Router();

// Obtener todas las usuarios activas
router.get("/usuarios", getUsuarios);

// Obtener 1 reservacion
router.get("/usuarios/:id_usuario", getUsuario);

// Eliminar 1 reservacion
router.delete("/usuarios/:id_usuario", deleteUsuario);

// Agregar 1 usuario
router.post("/usuarios", createUsuario);

export default router;
 