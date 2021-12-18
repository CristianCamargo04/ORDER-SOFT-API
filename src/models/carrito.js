const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/index');
const Producto = require("./Producto");

const Carrito = sequelize.define(
    "carritos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        id_producto: {
            type: DataTypes.INTEGER,
            references: {
                model: Producto,
                key: "id",
            },
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
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

Producto.hasMany(Carrito, { foreignKey: 'id' })
Carrito.belongsTo(Producto, { foreignKey: 'id_producto' })

module.exports = Carrito;