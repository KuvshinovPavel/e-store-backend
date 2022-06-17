import {DataTypes,} from "sequelize";

 const Category = sequelize=>sequelize.define('category', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING
    },

    {
        createdAt: false,
        updatedAt: false
    })

export default Category;