

import express from 'express';
import { createConnection } from 'mysql2';


// Create MySQL connection
const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mbf@1234',
    database: 'single_track',
});



export default db;

























// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();

// // Create MySQL connection pool
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'Mbf@1234',
//     database: process.env.DB_NAME || 'crud_db',
//     dateStrings: 'date',
// });

// // Function to test the connection
// async function testConnection() {
//     try {
//         const connection = await pool.getConnection();
//         const [rows, fields] = await connection.query('SELECT * FROM emp');
//         console.log('db connected');
//         console.log(rows);
//         connection.release(); // Release the connection back to the pool
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Call the test connection function
// testConnection();

// export default pool;