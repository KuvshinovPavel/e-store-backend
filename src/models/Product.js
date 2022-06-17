import {DataTypes} from "sequelize";


const Product =sequelize=>sequelize.define('product', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        imgUrl: DataTypes.STRING,
        price: DataTypes.INTEGER
    },

    {
        createdAt: false,
        updatedAt: false,
    })

export default Product