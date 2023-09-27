import { Router } from "express";
import {
  createHabitacion,
  deleteHabitacion,
  getHabitaciones,
  getHabitacion,
  updateHabitacion,
} from "../../controllers/habitaciones/habitaciones.controller.js";

const router = Router();

// Obtener habitaciones
router.get("/habitaciones", getHabitaciones);

// Obtener 1 habitacion
router.get("/habitaciones/:id_habitacion", getHabitacion);

// Eliminar 1 habitacion
router.delete("/habitaciones/:id_habitacion", deleteHabitacion);

// Agregar 1 habitacion
router.post("/habitaciones", createHabitacion);

//Editar estado habitacion
router.patch("/habitaciones/:id", updateHabitacion);

export default router;
