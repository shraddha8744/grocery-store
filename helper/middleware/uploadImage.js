const multer = require('multer');

// ----using multer pakagae upload image and store it--------

const uploadImage = multer({
    storage: multer.diskStorage({
        //add a dstination where image store
        destination: function (req, file, cb) {
            cb(null, 'uploads');
        },
    

        filename: function (req, file, cb) {
            console.log(req.body); // Logging the request body
            cb(null, file.originalname+".jpg");
        }
    })
}).single('image');

module.exports = uploadImage;
