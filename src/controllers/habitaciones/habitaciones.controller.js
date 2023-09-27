import { pool } from "../../db.js";


//OBTENER TODAS LAS HABITACIONES
export const getHabitaciones = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM habitaciones");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//OBTENER UNA SOLA HABITACION
export const getHabitacion = async (req, res) => {
  try {
    const { id_habitacion } = req.params;
    const [rows] = await pool.query("SELECT * FROM habitaciones WHERE id_habitacion = ?", [
      id_habitacion,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Habitacion no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//BORRAR UNA HABITACION
export const deleteHabitacion = async (req, res) => {
  try {
    const { id_habitacion } = req.params;
    const [rows] = await pool.query("DELETE FROM habitaciones WHERE id = ?", [id_habitacion]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "habitacion no encontrada" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//Crear una habitacion
export const createHabitacion = async (req, res) => {
  try {
    const { tipo_de_habitacion, estado, precio } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO habitaciones (tipo_de_habitacion,estado, precio) VALUES (?, ?, ?)",
      [tipo_de_habitacion, estado, precio]
    );
    res.status(201).json({ id: rows.insertId, tipo_de_habitacion, estado, precio });
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};


//Actualizar estado de habitacion
export const updateHabitacion = async (req, res) => {
  try {
    const { id_habitacion } = req.params;
    const { estado } = req.body;

    const [result] = await pool.query(
      "UPDATE habitaciones SET  estado = IFNULL(?, estado) WHERE id_habitacion = ?",
      [estado, id_habitacion]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Habitacion no encontrada" });

    const [rows] = await pool.query("SELECT * FROM habitaciones WHERE id = ?", [
      id_habitaciony,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};
