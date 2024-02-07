import multer from "multer"; 
// use to upload files

const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
        cb(null, "./public/temp")
    },// cb callback
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})