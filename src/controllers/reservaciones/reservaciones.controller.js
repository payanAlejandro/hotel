import { pool } from "../../db.js";


//OBTENER TODAS LAS RESERVACIONES
export const getReservaciones = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM reservaciones");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//OBTENER UNA SOLA RESERVACION
export const getReservacion = async (req, res) => {
  try {
    const { id_reservacion } = req.params;
    const [rows] = await pool.query("SELECT * FROM reservaciones WHERE id_reservacion = ?", [
      id_reservacion,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Reservacion no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//BORRAR UNA RESERVACION
export const deleteReservacion = async (req, res) => {
  try {
    const { id_reservacion } = req.params;
    const [rows] = await pool.query("DELETE FROM reservaciones WHERE id = ?", [id_reservacion]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "reservacion no encontrada" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//Crear una reservacion
export const createReservacion = async (req, res) => {
  try {
    const { fecha_llegada, fecha_salida, numero_huespedes, id_usuario, id_habitacion, id_tipo_de_pago } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO reservaciones (fecha_llegada, fecha_salida, numero_huespedes, id_usuario, id_habitacion, id_tipo_de_pago) VALUES (?, ?, ?, ?, ?, ?)",
      [fecha_llegada, fecha_salida, numero_huespedes, id_usuario, id_habitacion, id_tipo_de_pago]
    );
    res.status(201).json({ id_reservacion: rows.insertId, fecha_llegada, fecha_salida, numero_huespedes, id_usuario, id_habitacion, id_tipo_de_pago });
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

