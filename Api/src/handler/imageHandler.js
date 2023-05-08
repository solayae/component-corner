const cloudinary = require("cloudinary");
require("dotenv").config();
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});

const imageHandler = async(req, res) => {
    const { public_id } = req.params;

    try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send("borrado con éxito");
    } catch (error) {
      res.status(400).json({ message: error });
    }
}

module.exports = imageHandler
