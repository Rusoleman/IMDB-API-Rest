const {Directors} = require('../models');

const getAll = async (res, req, next) => {
    try {
        const result = await Directors.findAll({raw: true});
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        const director = await Directors.create(req.body);
        res.json(director);
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const director = await Directors.update(req.body, {where: {id}});
        res.json(director);
    } catch (error) {
        
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const director = await Directors.destroy({where: {id}});
        res.json(director);
    } catch (error) {
        next(error);
    }
}

const uploadImage = async (req, res, next) => {
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