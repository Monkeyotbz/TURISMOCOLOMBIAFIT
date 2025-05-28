import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres', // Usuario de PostgreSQL
  host: 'localhost', // Dirección del servidor
  database: 'colombiaturismo', // Nombre de la base de datos
  password: 'Klapaucius1236*', // Contraseña del usuario
  port: 5432, // Puerto predeterminado de PostgreSQL
});

export default pool;