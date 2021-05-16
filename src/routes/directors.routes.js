const {Router} = require('express');
const {getAll, create, update, remove, uploadImage} = require('../controllers/directors.controller');
const route = Router();
const multer = require('multer');
const mimetypes = require('mime-types');

const storage = multer.diskStorage({
    destination:(req, file, callback) => {
        callback(null, "./src/uploads/directors");
    },
    filename: (req, file, callback) => {
        const ext = mimetypes.extension(file.mimetype);
        if (ext !== 'pdf') {
            callback(null,`${file.fieldname}${Date.now()}.${ext}`);
        } else {
            const fileError = new Error("The format isn't accept for the server!");
            callback(fileError,null);
        }
    }
}); 
const upload = multer({storage:storage ,limits:{fileSize:1000000}});//Limite de carga 1MB img

route.get("/directors", getAll);
route.post("/directors", create);
route.put("/directors/:id",update);
route.put("/directors/:id/profile", upload.single('image'), uploadImage);
route.delete("/directors/:id",remove);


module.exports = route; 

