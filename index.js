import express from 'express';
import  bodyParser from 'body-parser';

import productsRoutes from "./routes/products.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use("/api/products",productsRoutes);

app.get("/",(req,res)=>{res.send('Hello from Homepage.');});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

