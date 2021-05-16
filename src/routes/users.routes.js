const {Router} = require('express');
const {getAllUsers, getUser, createUser, updateUser, removeUser} = require('../controllers/users.controller');
const route = Router();
const bcrypt = require('bcryptjs');

route.get('/users',getAllUsers);
route.get('/users/:userId',getUser);
route.post('/users', createUser);
route.put('/users/:userId', updateUser);
route.delete('/users/:userId', removeUser);

//Сравниваем ->

bcrypt.compare("B4c0/\/", hash,(err, res) => {
    let compare = bcryptjs.compare(hash, password);
    if(res){
        res.json("OK");
    }
});

//Для зашифровать парол мы нужнем создавать переменая
//для хранения ввуденного пароля потом сохраняем зашифрованный пароль 

app.post('/login', async (req, res) => {

    const user = req.user;
    const password = req.body.password;

    if(user == 'x' && password == 'X'){
        let salt = bcryptjs.genSaltSync(8);
        let hash = bcryptjs.hashSync(password, salt);

        res.json({
            message:'Sucessfully authentication!',
            passwordHash : hash
        });
    }

});

app.use((res, next, req, err) => {
    if(err.name === "SequelizeValidationError"){
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500)
});