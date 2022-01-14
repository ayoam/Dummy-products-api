DummyProductAPI
DummyProductAPI is a free online REST API that you can use whenever you need dummy products for your e-commerce store. It's awesome for teaching purposes, sample codes, tests and etc.

live demo : http://products-api-v1.herokuapp.com/api/products

## How to
you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)

**Get all products**
```
fetch("https://products-api-v1.herokuapp.com/api/products/")
  .then((res) => res.json())
  .then((json) => console.log(json));
```
**Get a single product by id**
```
fetch("https://products-api-v1.herokuapp.com/api/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

**Add new product**
```
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
```
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
```

**Deleting a product**
```
fetch("https://fakestoreapi.com/products/1", {
  method: "DELETE",
});
```
