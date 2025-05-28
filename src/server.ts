import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './dbClient'; // Importa tu configuración de PostgreSQL

const app = express();
app.use(cors());
app.use(express.json()); // Para manejar JSON en las solicitudes

// Ruta para registrar un usuario
app.post('/api/signup', async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO profiles (email, name, password) VALUES ($1, $2, $3) RETURNING *',
      [email, name, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error al registrar el usuario:', err);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para obtener todos los usuarios (opcional)
app.get('/api/profiles', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM profiles');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener los perfiles:', err);
    res.status(500).json({ error: 'Error al obtener los perfiles' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});