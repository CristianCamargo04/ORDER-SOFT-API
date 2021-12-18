const { Router } = require("express");
const { check } = require("express-validator");

const { obtenerProductos, obtenerProductosPorCategorias, buscarPorId } = require("../controllers/producto.controller");
const { existProducto } = require("../helpers/db-validator");

const route = Router();

route.get("/", obtenerProductos);

route.get("/categoria/:id_categoria", obtenerProductosPorCategorias);

route.get("/:id", [
    check("id").custom(existProducto),
], buscarPorId);

module.exports = route;