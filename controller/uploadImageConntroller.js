const prisma = require("../db/db.js");

const saveImage = async (req, res) => {
    try {
        // console.log(req.body);

        if (!req.file || !req.body.name || !req.body.description) {
            return res.status(400).json({
                success: false,
                message: "All required fields."
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
                message: "This image name already exists. Please select another image."
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
            message: "File uploaded successfully.",
            data: storedImage
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "err."
        });
    }
};

module.exports = {
    saveImage
};
