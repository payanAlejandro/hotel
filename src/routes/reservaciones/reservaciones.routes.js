import { Router } from "express";
import {
  createReservacion,
  deleteReservacion,
  getReservaciones,
  getReservacion,
} from "../../controllers/reservaciones/reservaciones.controller.js";

const router = Router();

// Obtener todas las reservaciones activas
router.get("/reservaciones", getReservaciones);

// Obtener 1 reservacion
router.get("/reservaciones/:id_reservacion", getReservacion);

// Eliminar 1 reservacion
router.delete("/reservaciones/:id_reservacion", deleteReservacion);

// Agregar 1 habitacion
router.post("/habitaciones", createReservacion);

export default router;
 