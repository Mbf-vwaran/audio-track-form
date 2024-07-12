import express from 'express';
import multer from 'multer';
import path from 'path';
import db from '../config/db.js';
import fs from 'fs';

const router = express.Router();

// 1. To get audio_singles details from DB 
router.get('/', (req, res) => {
  const sql = "SELECT * FROM track_audio";
  db.query(sql, (err, data) => {
    if (err) {
      res.status(500).json(`Error: ${err.message}`);
      return;
    }
    res.json(data);
  });
});


// Ensure uploads directory exists
const ensureUploadsDirectoryExists = () => {
  const uploadPath = path.resolve('uploads');
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }
};

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    ensureUploadsDirectoryExists();
    cb(null, 'uploads/'); // Destination folder where files will be stored temporarily
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});


const upload = multer({ storage: storage });

// Route to handle file uploads and insert into DB
router.post('/create', upload.fields([{ name: 'song_file', maxCount: 1 }, { name: 'song_file1', maxCount: 1 }]), (req, res) => {
  // Check if req.files contains the expected fields
  if (!req.files || !req.files['song_file'] || !req.files['song_file'][0] || !req.files['song_file1'] || !req.files['song_file1'][0]) {
    return res.status(400).json('No files were uploaded.');
  }

  const songFile = req.files['song_file'][0];
  const songFile1 = req.files['song_file1'][0];

  const sql = `INSERT INTO track_audio (
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
    track_upc,
    track_catalogue,
    song_file,
    song_file1
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

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
    req.body.track_upc,
    req.body.track_catalogue,
    songFile.filename,
    songFile1.filename
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error('Error inserting into database:', err);
      return res.status(500).json(`Error: ${err.message}`);
    }
    res.json({ message: 'Data inserted into database.' });
  });
});

router.delete('/delete/:id', (req, res) => {
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


export default router;
