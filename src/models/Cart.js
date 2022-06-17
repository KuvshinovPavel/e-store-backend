import {DataTypes,} from "sequelize";

const Cart = sequelize => sequelize.define('cart', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        buyerId: {
            type: DataTypes.INTEGER,
            unique: true
        }

    },

    {
        createdAt: false,
        updatedAt: false
    })

export default Cart;