import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewProduct, fetchListOfProducts } from "../api"
import { useState } from "react"

export const ReactQueryDemo = () => {
  const [productTitle, setProductTitle] = useState("")

  const getQueryClient = useQueryClient()

  const {data: productList, isLoading} = useQuery(
    {
      queryKey : ["productList"],
      queryFn : () => fetchListOfProducts()
    }
  )

  const {mutateAsync : handleAddNewProductMutation} = useMutation({
    mutationFn : addNewProduct,
    onSuccess : () => {
      getQueryClient.invalidateQueries(["productList"])
    }
  })

  async function handleAddNewProduct() {
    await handleAddNewProductMutation(productTitle)
    setProductTitle("")
  }

  if(isLoading) return <h1>Loading products. Please Wait...</h1>
  return <div>
    <h1>React Query Demo</h1>
    <div>
      <input type="text" 
      name="name"
      value={productTitle}
      placeholder="Enter product title"
      onChange = {(event)=>setProductTitle(event.target.value)} />
      <button onClick={handleAddNewProduct} disabled={productTitle.trim()===""} type="button">Add new Product</button>
    </div>
    <ul>
      {
        productList?.length > 0 ?
        productList.map(product => <li key={product.id}>{product.title}</li>)
        : <h3>No product found</h3>
      }
    </ul>
  </div>
}