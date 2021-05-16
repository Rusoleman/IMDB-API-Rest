const Users = require('../models');

const getAllUsers = async (res, req, next) => {
    try {
        const result = await Users.findAll({raw: true});
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getUser = async (res, req, next) => {
    try {
        const result = await Users.findOne({raw: true});
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const createUser = async (res, req, next) => {
    try {
        const result = await Users.create(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (res, req, next) => {
    try {
        const id = req.params.id;
        const user = await Users.update({where: {id}});
        res.json(user);
    } catch (error) {
        next(error);
    }
}

const removeUser = async (res, req, next) => {
    try {
        const id = req.params.id;
        const user = await Users.destroy({where: {id}});
        res.json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    removeUser
}