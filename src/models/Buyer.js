import {DataTypes,} from "sequelize";

const Buyer = sequelize => sequelize.define('buyer', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: {
            type: DataTypes.INTEGER,
            unique: true,
            isEmail: true
        }

    },

    {
        createdAt: false,
        updatedAt: false
    })

export default Buyer;