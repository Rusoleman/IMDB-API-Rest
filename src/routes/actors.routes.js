const {Router} = require('express');
const {getAll, create, remove, update, uploadImage} = require('../controllers/actors.controller');
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

route.get("/actors", getAll);
route.post("/actors",create);
route.put("/actors/:id",update);
route.delete("/actors/:id",remove);
route.put("/actors/:id/profile", upload.single('image'),uploadImage);


module.exports = route; 