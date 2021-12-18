const { response, request } = require("express");
const { Categoria } = require("../models");

const obtenerCategorias = async(req = request, res = response) => {
    const categorias = await Categoria.findAll();
    res.status(200).json({
        categorias
    });
}

const buscarPorId = async(req = request, res = response) => {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
        return res.status(209).json({
            msg: `No se encontro ninguna categoria asociado al id ${id}`
        });
    }
    return res.status(200).json({
        categoria
    });
}

module.exports = {
    obtenerCategorias,
    buscarPorId
}