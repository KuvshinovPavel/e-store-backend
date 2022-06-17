import {Sequelize} from "sequelize";
import Category from './Category.js';
import Product from './Product.js';
import Buyer from './Buyer.js';
import Cart from './Cart.js';
 const sequelize=new Sequelize({
    host:'localhost',
    username:'postgres',
    password:'1',
    dialect:'postgres',
    database:'e_shop'
});

 const db={};

 db.Sequelize=Sequelize;
 db.sequelize=sequelize;

 db.categories=Category(sequelize);
 db.products=Product(sequelize);
 db.cart=Cart(sequelize);
 db.buyer=Buyer(sequelize);

 db.categories.hasMany(db.products,{
    as:'products'
 });

db.products.belongsTo(db.categories,{
   foreignKey:'categoryId',
   as:'category'
});

db.products.belongsToMany(db.cart,{
    through:'products_cart',
    as:'cart',
    foreignKey:'product_id'
});
db.cart.belongsToMany(db.products,{
    through:'products_cart',
    as:'products',
    foreignKey:'cart_id'
});

export default db;
