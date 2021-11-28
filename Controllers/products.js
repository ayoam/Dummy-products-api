import fs from 'fs'
let Products = [];
let ReferenceCounter;

const loadProductsJson = ()=>{
    let rawdata = fs.readFileSync('./product.json');
    try{
        Products = JSON.parse(rawdata);
    }
    catch(e){
        Products = [];
    }
}

const updateProductsJson = ()=>{
    fs.writeFile('./product.json',JSON.stringify(Products),function(err, result) {
        if(err) console.log('error', err);
    });
}

export const getAllProducts = (req,res)=>{
    loadProductsJson();
    res.send(Products);
}

export const createProduct = (req,res)=>{
    const Product= req.body;
    ReferenceCounter = (Products.length<1)?0:parseInt(Products[Products.length-1].reference);
    Products.push({ reference:++ReferenceCounter,...Product});
    updateProductsJson();
    loadProductsJson();
    res.send(Product);
}

export const getProductById = (req,res)=>{
    let Product = Products.filter((elt,pos)=>elt.reference==req.params.reference);
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
        updateProductsJson();
        loadProductsJson();
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
        updateProductsJson();
        loadProductsJson();
        return;
    }
    res.send("Product not found!");
}