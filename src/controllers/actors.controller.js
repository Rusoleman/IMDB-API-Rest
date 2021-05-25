const {Actors} = require('../models');

const getAll = async (res, req, next) => {
    try {
        const result = await Actors.findAll({raw: true});
        res.json(result);
    } catch (error) {
        next(error); 
    }
}

const create = async(req, res, next) => {
    try {
        const actor = await Actors.create(req.body);
        res.json(actor);
        res.status(201);
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const actor = await Actors.update(req.body, {where: {id}});
        res.json(actor);
    } catch (error) {
        next(error);
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const actor = await Actors.destroy({where: {id}});
        res.json(actor);
    } catch (error) {
        next(error);
    }
}

const uploadImage = async(req, res, next) => {
    const id = req.params.id;
    const file = req.file
    try {
        await Directors.update({profile_photo: `/directors/${file.filename}`}, {where: {id}});
        res.json("Uploaded!");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
    create,
    update,
    remove,
    uploadImage
}