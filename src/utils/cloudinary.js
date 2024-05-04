import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePAth) => {
  try {
    if (!localFilePAth) {
      return null;
    }
    const res = await cloudinary.uploader.upload(localFilePAth, {
      resource_type: "auto",
    });
    // file uploaded
    console.log("file uploaded", res.url);
    fs.unlinkSync(localFilePAth); // remove the local file
    return res;
  } catch (err) {
    console.log(err);
    fs.unlinkSync(localFilePAth); // remove the local file
    return null;
  }
};

export default uploadOnCloudinary;
