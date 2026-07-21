export const ProductList = () => {
  const products = [
    {id : 1, name : "Phone", price : "$699"},
    {id : 2, name : "Laptop", price : "$1200"},
    {id : 3, name : "Headphones", price : "$199"}
  ]

  return (
    <div>
      {products.map(({id,name,price})=>{
        return <div key={id}>
          <h1>Product name : {name}</h1>
          <h2>Price : {price}</h2>
        </div>
      })}
    </div>
  )
}