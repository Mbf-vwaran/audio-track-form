import express from 'express';
import multer from 'multer';
import path from 'path';
import db from '../config/db.js';
import fs from 'fs';

const router = express.Router();


// Route to handle file uploads and insert into DB

router.post('/login', async (req, res) => {
  // Check if req.files contains the expected fields
 
});

router.delete('/api/delete/:id', (req, res) => {
  const sql = `DELETE FROM track_audio WHERE id = ?`;
  const id = req.params.id;

  db.query(sql, id, (err, data) => {
    if (err) {
      res.status(500).json(`Error: ${err.message}`);
      return;
    }
    res.json(data);
  });
});

// 1. To get audio_singles details from DB 
router.get('/api', (req, res) => {
  const sql = "SELECT * FROM track_audio";
  db.query(sql, (err, data) => {
    if (err) {
      res.status(500).json(`Error: ${err.message}`);
      return;
    }
    res.json(data);
  });
});




export default router;
