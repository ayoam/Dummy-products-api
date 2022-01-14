How to
you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)

##Get all products
```
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
```
##Get a single product
```
fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
```
