const express = require('express');
const multer = require('multer');
const path = require('path'); // To work with file paths

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Provide an absolute path to the destination directory
    cb(null, path.join(__dirname, 'uploads')); // This assumes the 'uploads' directory is in the same folder as your script
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/upload', upload.array('download', 3), function (req, res, next) {
  // req.files contains an array of uploaded files
  res.send("Files uploaded");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
