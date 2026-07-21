export const ProductInfo = () => {
  const product = {
    name : "Laptop",
    price : "$1200",
    availability : "In-stock"
  }
  return <div>
    <h1>Product Info</h1>
    <p>Name : {product.name}</p> 
    <p>Price : {product.price}</p> 
    <p>Availability : {product.availability}</p>
  </div>
}