const { Router } = require("express");
const { check } = require("express-validator");

const {
    crearCarrito,
    obtenerCarritos,
    buscarPorId,
    actualizar,
    eliminarById
} = require("../controllers/carrito.controller");

const { existCarrito } = require("../helpers/db-validator");
const { validarCampos } = require("../middlewares");

const route = Router();

route.post("/", [
    check("usuario", "debe existir el usuario").notEmpty(),
    check("id_producto", "debe existir el producto").notEmpty(),
    check("cantidad", "debe existir la cantidad").notEmpty(),
    check("precio", "debe existir el precio").notEmpty(),
    validarCampos
], crearCarrito);

route.get("/:usuario", obtenerCarritos);

route.get("/:usuario/:id", [
    check("id").custom(existCarrito),
], buscarPorId);

route.put("/:id", [
    check("cantidad", "debe existir la cantidad").notEmpty(),
    check("id").custom(existCarrito),
    validarCampos
], actualizar);

route.delete("/:id", [
    check("id", "El id no debe ser nulo").notEmpty(),
    check("id").custom(existCarrito),
    validarCampos
], eliminarById);

module.exports = route;