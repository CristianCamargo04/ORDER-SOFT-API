const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/index');
const Categoria = require("./Categoria");

const Producto = sequelize.define(
    "productos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        nombre: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            references: {
                model: Categoria,
                key: "id",
            },
        },
        precio: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Producto;