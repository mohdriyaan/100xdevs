import { useEffect } from "react"
import { useCounter } from "../store/useCounter"

function Products() {
  const {listOfProducts, fetchListOfProducts} = useCounter((state)=>state)
  
  useEffect(()=>{
    fetchListOfProducts()
  },[])

  return (
    <div>
      <h1>List Of Products</h1>
      <ul>
      {listOfProducts.map((product,index)=>(
        <li key={index}>{product.title}</li>
      ))}
      </ul>
    </div>
  )
}
export default Products