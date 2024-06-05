const multer = require('multer');

const uploadImage = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads');
        },
        filename: function (req, file, cb) {

            

            cb(null, file.originalname);
        }
    })
}).single('image');

module.exports = uploadImage;
