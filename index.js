//Import Area

//const something = require('somelibar');

const express = require('express');
const app = express();
const multer  = require('multer');
require('dotenv').config();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Math.floor(Math.random() * 100000000)+file.originalname)//2934anil.png
    }
  })

const upload = multer({ storage: storage });

app.post('/fileupload',upload.single('myfile'),(req,res)=>{
    console.log(req.file)

    res.status(200).json({
        msg:"File upload successfully"
    });
});



let port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});