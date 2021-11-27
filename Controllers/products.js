import fs from 'fs'
let Products = [];
let ReferenceCounter = 0;

const loadProductsJson = ()=>{
    let rawdata = fs.readFileSync('C:/Users/AYOUB/Desktop/webdev/REST-API-PRODUCTS/product.json');
    Products = JSON.parse(rawdata);
    Products.forEach((elt,pos) => {
        Products[pos] = {reference:++ReferenceCounter,...elt};
    });
}

loadProductsJson();

export const getAllProducts = (req,res)=>{
    res.send(Products);
}

export const createProduct = (req,res)=>{
    const Product= req.body;
    Products.push({ reference:++ReferenceCounter,...Product});
    res.send(Products);
    console.log(Product);
}

export const getProductById = (req,res)=>{
    let Product = Products.filter((elt,pos)=>elt.id==req.params.id);
    if(Product.length>0){
        res.send(Product);
        return;
    }
    res.send("Product not found!");
}

export const deleteProductById  = (req,res)=>{
    let ProductsCount = Products.length;
    Products = Products.filter((elt,pos)=>elt.reference!=req.params.reference);
    if(ProductsCount>Products.length){
        res.send("Product deleted");
        return;
    }
    res.send("Product not found!");
}

export const updateProduct  =(req,res)=>{
    const ProductToUpdate = Products.find((elt)=>elt.reference==req.params.reference);
    if(ProductToUpdate){
        //req.body IS ARRAY OF NEW VALUES 
        const{libelle,prix,remise,quantite,photo} = req.body;
        if(libelle) ProductToUpdate.libelle = libelle
        if(prix) ProductToUpdate.prix = prix;
        if(remise) ProductToUpdate.remise = remise;
        if(quantite) ProductToUpdate.quantite = quantite;
        if(photo) ProductToUpdate.photo = photo;
        res.send("Product updated!");
        return;
    }
    res.send("Product not found!");
}