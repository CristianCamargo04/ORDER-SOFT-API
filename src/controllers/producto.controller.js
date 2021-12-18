const { response, request } = require("express");
const { Producto } = require("../models");

const obtenerProductos = async(req = request, res = response) => {
    const productos = await Producto.findAll();
    res.status(200).json({
        productos
    });
}

const obtenerProductosPorCategorias = async(req = request, res = response) => {
    const { id_categoria } = req.params;
    const productos = await Producto.findAll({ where: { id_categoria } });
    res.status(200).json({
        productos
    });
}

const buscarPorId = async(req = request, res = response) => {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) {
        return res.status(209).json({
            msg: `No se encontro ningun Producto asociado al id ${id}`
        });
    }
    return res.status(200).json({
        producto
    });
}

module.exports = {
    obtenerProductos,
    obtenerProductosPorCategorias,
    buscarPorId
}