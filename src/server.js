import express from "express";
import db from "./models/index.js";
import categoryRouter from "./routers/categoryRouter.js";
import cors from "cors";
import productRouter from "./routers/productRouter.js";

const app = express();


db.sequelize.sync({}).then(() => {
    console.log('sync')
})
app.use(categoryRouter);
app.use(productRouter);
app.use(express.json())
// const corsOptions = {
//   origin: "http://localhost:3001/",
//
// };
app.use(cors())
app.all('/',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
})
const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT)
});

