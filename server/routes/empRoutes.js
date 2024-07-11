import express from 'express';
import db from '../config/db.js';

const router = express.Router();


// 1. To get audio_singles details from DB 
router.get('/api/get', (req, res) => {
    const sql = "SELECT * FROM audio_singles";
    db.query(sql, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });
  
  // 2. To post/insert the audio_singles details into DB
  router.post('/api/create', (req, res) => {
    const sql = `INSERT INTO audio_singles (
                   track_name,  
                   track_series, 
                   track_subtle,
                   track_soundTrack,
                   track_artist,
                   track_primaryArtist1,
                   track_spotify_uri,
                   track_apple_uri,
                   track_sound_cloud_url,
                   track_contributor_name1,
                   track_contributor_role1,
                   track_genre,
                   track_alt_genre,
                   track_sub_genre,
                   track_alt_genre2,
                   track_record_year,
                   track_org_date,
                   track_comm_date,
                   track_comm_time,
                   track_pre_date,
                   track_lang_1,
                   track_year_when,
                   track_copyright_year,
                   track_copyright_iconMusic,
                   track_copyright_3,
                   track_copyright_dist,
                   track_isrc,
                   song-file1,
                   track_upc,
                   track_catalogue,
                   song-file) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    const values = [
      req.body.track_name,  
      req.body.track_series, 
      req.body.track_subtle,
      req.body.track_soundTrack,
      req.body.track_artist,
      req.body.track_primaryArtist1,
      req.body.track_spotify_uri,
      req.body.track_apple_uri,
      req.body.track_sound_cloud_url,
      req.body.track_contributor_name1,
      req.body.track_contributor_role1,
      req.body.track_genre,
      req.body.track_alt_genre,
      req.body.track_sub_genre,
      req.body.track_alt_genre2,
      req.body.track_record_year,
      req.body.track_org_date,
      req.body.track_comm_date,
      req.body.track_comm_time,
      req.body.track_pre_date,
      req.body.track_lang_1,
      req.body.track_year_when,
      req.body.track_copyright_year,
      req.body.track_copyright_iconMusic,
      req.body.track_copyright_3,
      req.body.track_copyright_dist,
      req.body.track_isrc,
      req.body.song-file1,
      req.body.track_upc,
      req.body.track_catalogue,
      req.body.song-file
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });
  










  // 3. To update/edit the audio_singles details from 'DB' based on ID
  // router.put('/update/:id', (req, res) => {
  //   const sql = `UPDATE audio_singles SET
  //                  f_name = ?, 
  //                  email = ?, 
  //                  mobile = ?, 
  //                  address = ?
  //                 WHERE id = ?`;
  
  //   const values = [
  //       req.body.f_name, 
  //       req.body.email, 
  //       req.body.mobile, 
  //       req.body.address,
  //       req.params.id
  //   ];
  
  //   db.query(sql, values, (err, data) => {
  //     if (err) {
  //       res.status(500).json(`Error: ${err.message}`);
  //       return;
  //     }
  //     res.json(data);
  //   });
  // });
  
  // 4. To delete the audio_singles details from 'DB' based on ID
  // router.delete('/delete/:id', (req, res) => {
  //   const sql = `DELETE FROM audio_singles WHERE id = ?`;
  //   const id = req.params.id;
  
  //   db.query(sql, id, (err, data) => {
  //     if (err) {
  //       res.status(500).json(`Error: ${err.message}`);
  //       return;
  //     }
  //     res.json(data);
  //   });
  // });

  // 5. To get the audio_singles details from 'DB' based on ID for showing update page
  // router.get('/getrecord/:id', (req, res) => {
  //   const id = req.params.id;
  //   const sql = `SELECT * FROM audio_singles WHERE id = ?`;
  
  //   db.query(sql, id, (err, data) => {
  //     if (err) {
  //       res.status(500).json(`Error: ${err.message}`);
  //       return;
  //     }
  //     res.json(data);
  //   });
  // });

  export default router;