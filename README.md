# DummyProductsAPI

DummyProductsAPI is a free online REST API that you can use whenever you need dummy products for your e-commerce store. It's awesome for teaching purposes, sample codes, tests and etc.

API url : http://products-api-v1.herokuapp.com/api/products

## How to
you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)

**Get all products**
```js
fetch("https://products-api-v1.herokuapp.com/api/products/")
  .then((res) => res.json())
  .then((json) => console.log(json));
  
  /*
    returns a json array, example:
    [
        {
          "reference": 1,
          "libelle": "test product",
          "prix": "15.99",
          "remise": "5",
          "quantite": "23",
          "photo": "https://i.pravatar.cc"
        },
        {
          "reference": 2,
          "libelle": "test product2",
          "prix": "10.99",
          "remise": "3",
          "quantite": "10",
          "photo": "https://i.pravatar.cc"
        }
    ]

  */
```
**Get a single product by id**
```js
fetch("https://products-api-v1.herokuapp.com/api/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
  
  /*
    return example:
    {
        "reference": 1,
        "libelle": "test product",
        "prix": "15.99",
        "remise": "5",
        "quantite": "23",
        "photo": "https://i.pravatar.cc"
     }
  */
```

**Add new product**
```js
fetch("https://products-api-v1.herokuapp.com/api/products/", {
  method: "POST",
  body: JSON.stringify({
      "libelle": "test product",
      "prix": "15.99",
      "remise": "5",
      "quantite": "23",
      "photo": "https://i.pravatar.cc"
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```
**Updating a product**
```js
fetch("https://products-api-v1.herokuapp.com/api/products/2", {
  method: "PATCH",
  body: JSON.stringify({
      "libelle": "test product",
      "prix": "15.99",
      "remise": "5",
      "quantite": "23",
      "photo": "https://i.pravatar.cc"
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* 
PS: you can update just needed keys

fetch("https://products-api-v1.herokuapp.com/api/products/2", {
  method: "PATCH",
  body: JSON.stringify({
      "libelle": "test product"
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json)); 
  */
```

**Deleting a product**
```js
fetch("https://fakestoreapi.com/products/1", {
  method: "DELETE",
});
```
