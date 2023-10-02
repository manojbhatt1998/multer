const express = require('express');
const multer = require('multer');
const path = require('path'); // To work with file paths

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Provide an absolute path to the destination directory
    cb(null, path.join(__dirname, 'uploads')); // This assumes uploads directory is in the same folder as your script
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage }).single("download");

app.post('/upload', upload, function (req, res, next) {
  res.send("File uploaded");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
