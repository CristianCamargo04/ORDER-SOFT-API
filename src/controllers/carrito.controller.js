const { response, request } = require("express");
const { Carrito, Producto } = require("../models");

const crearCarrito = async(req, res = response) => {
    const data = req.body;
    carrito = new Carrito(data);
    await carrito.save();
    return res.status(200).json({
        carrito
    });
}

const obtenerCarritos = async(req = request, res = response) => {
    const { usuario } = req.params;
    const carritos = await Carrito.findAll({
        where: { usuario },
        include: { model: Producto }
    });
    let total = 0;
    carritos.forEach(carrito => total += carrito.cantidad * carrito.precio);
    res.status(200).json({
        carritos,
        total
    });
}

const buscarPorId = async(req = request, res = response) => {
    const { usuario, id } = req.params;
    const carrito = await Carrito.findByPk(id, {
        include: { model: Producto }
    });
    if (!carrito) {
        return res.status(209).json({
            msg: `No se encontro ningun item del Carrito asociado al id ${id}`
        });
    }
    return res.status(200).json({
        carrito
    });
}

const actualizar = async(req, res) => {
    const { id } = req.params;
    const { cantidad } = req.body;
    carrito = await Carrito.findByPk(id);
    carrito.cantidad = cantidad;
    await carrito.save();
    return res.status(200).json({
        msg: "Actualizado corrrectamente la cantidad del item del carrito de compras",
        carrito
    });
}

const eliminarById = async(req = request, res = response) => {
    const { id } = req.params;
    const carrito = await Carrito.findByPk(id);
    carrito.destroy();
    return res.status(200).json({
        msg: "Se ha eliminado correctamente el item del carrito de compras"
    });
}

module.exports = {
    crearCarrito,
    obtenerCarritos,
    buscarPorId,
    actualizar,
    eliminarById
}