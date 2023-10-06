import { pool } from "../../db.js";


//OBTENER TODAS LAS USUARIOS
export const getUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//OBTENER UN SOLO USUARIO
export const getUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const [rows] = await pool.query("SELECT * FROM usuario WHERE id_usuario = ?", [
      id_usuario,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//BORRAR UN USUARIO
export const deleteUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const [rows] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id_usuario]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "usuario no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

//CREAR UN USUARIO
export const createUsuario = async (req, res) => {
  try {
    const {id_usuario, email, contrasena, nombre, apellido_p, apellido_m} = req.body;
    const [rows] = await pool.query(
      "INSERT INTO usuarios (id_usuario, email, contrasena, nombre, apellido_p, apellido_m) VALUES (?, ?, ?, ?, ?, ?)",
      [id_usuario, email, contrasena, nombre, apellido_p, apellido_m]
    );
    res.status(201).json({ id_usuario: rows.insertId, email, contrasena, nombre, apellido_p, apellido_m});
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

