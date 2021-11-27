import express from 'express';
import {getAllProducts,createProduct,getProductById,deleteProductById,updateProduct} from '../Controllers/products.js'; 
const router = express.Router();

router.get("/",getAllProducts);

router.post("/",createProduct);

router.get("/:reference",getProductById)

router.delete("/:reference",deleteProductById);

router.patch('/:reference',updateProduct);

export default router;