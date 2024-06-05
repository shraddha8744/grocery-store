const prisma = require('../db/db.js');
//--------------save image and all image info in db

const saveImage = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('File:', req.file);

        if (!req.file || !req.body.name || !req.body.description) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields.'
            });
        }

        const imageAlreadyExist = await prisma.product_data.findFirst({
            where: {
                img: req.file.originalname
            }
        });

        if (imageAlreadyExist) {
            return res.json({
                success: false,
                message: 'This image name already exists. Please select another image.'
            });
        }

        const storedImage = await prisma.product_data.create({
            data: {
                name: req.body.name,
                img: req.file.originalname,
                description: req.body.description
            }
        });

        return res.json({
            success: true,
            message: 'File uploaded successfully.',
            data: storedImage
        });
    } catch (error) {
        console.error('Error saving image:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while uploading the image.'
        });
    }
};

module.exports = {
    saveImage
};
