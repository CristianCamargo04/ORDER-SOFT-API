const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/index');

const Categoria = sequelize.define(
    "categorias", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        imagen: {
            type: DataTypes.STRING,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Categoria;