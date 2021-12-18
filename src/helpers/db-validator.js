const {
    Carrito,
    Categoria,
    Producto,
} = require("../models");

const existCarrito = async(id) => {
    const carrito = await Carrito.findByPk(id);
    if (!carrito) {
        throw new Error(`No existe ningun carrito asociado al id: ${id}`);
    }
}

const existCategoria = async(id) => {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
        throw new Error(`No existe ninguna categoria asociado al id: ${id}`);
    }
}

const existProducto = async(id) => {
    const producto = await Producto.findByPk(id);
    if (!producto) {
        throw new Error(`No existe ningun producto asociado al id: ${id}`);
    }
}

module.exports = {
    existCarrito,
    existCategoria,
    existProducto,
}