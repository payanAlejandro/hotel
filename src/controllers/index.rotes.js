import { pool } from "../db.js";

export const index = (req, res) => res.json({ message: "welcome to my Hotel" });

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT "pong" as result');
  res.json(result[0]);
};
