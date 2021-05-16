const {Router} = require('express');
const {getAll, create, remove, update} = require('../controllers/actors.controller');
const route = Router();

route.get("/actors", getAll);
route.post("/actors",create);
route.put("/actors/:id",update);
route.delete("/actors/:id",remove);
//route.put("/actors/:id/profile",uploadImage);


module.exports = route; 