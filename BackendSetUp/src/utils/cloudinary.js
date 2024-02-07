import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'; // filesystem read,write file

cloudinary.config({
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
    api_key: 'process.env.CLOUDINARY_API_KEY',
    api_secret: 'process.env.CLOUDINARY_API_SECRET'
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload the file on cloudinary
        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been successfully uploaded
        console.log("file is uploaded successfully on cloudinary",
            res.url);
        fs.unlinkSync(localFilePath)
        return res;

    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally saved temp file as the upload operation got failed
        return null
    }
}

export { uploadOnCloudinary }

