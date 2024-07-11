import express from 'express';
import db from '../config/db.js';

const router = express.Router();


// 1. To get emp details from DB 
router.get('/', (req, res) => {
    const sql = "SELECT * FROM emp";
    db.query(sql, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });
  
  // 2. To post/insert the emp details into DB
  router.post('/create', (req, res) => {
    const sql = `INSERT INTO emp (
                   f_name,  
                   email, 
                   mobile, 
                   address ) VALUES (?, ?, ?, ?)`;
  
    const values = [
      req.body.f_name, 
      req.body.email, 
      req.body.mobile, 
      req.body.address
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });
  
  // 3. To update/edit the emp details from 'DB' based on ID
  router.put('/update/:id', (req, res) => {
    const sql = `UPDATE emp SET
                   f_name = ?, 
                   email = ?, 
                   mobile = ?, 
                   address = ?
                  WHERE id = ?`;
  
    const values = [
        req.body.f_name, 
        req.body.email, 
        req.body.mobile, 
        req.body.address,
        req.params.id
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });
  
  // 4. To delete the emp details from 'DB' based on ID
  router.delete('/delete/:id', (req, res) => {
    const sql = `DELETE FROM emp WHERE id = ?`;
    const id = req.params.id;
  
    db.query(sql, id, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });

  // 5. To get the emp details from 'DB' based on ID for showing update page
  router.get('/getrecord/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM emp WHERE id = ?`;
  
    db.query(sql, id, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });

  export default router;