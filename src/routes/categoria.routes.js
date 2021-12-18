const { Router } = require("express");
const { check } = require("express-validator");

const { obtenerCategorias, buscarPorId } = require("../controllers/categoria.controller");
const { existCategoria } = require("../helpers/db-validator");

const route = Router();

route.get("/", obtenerCategorias);

route.get("/:id", [
    check("id").custom(existCategoria),
], buscarPorId);

module.exports = route;