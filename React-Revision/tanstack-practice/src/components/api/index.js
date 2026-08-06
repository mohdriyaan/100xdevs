const productList= [
  {
    title : "Product1",
    id: 1
  },
  {
    title : "Product2",
    id: 2
  },
  {
    title : "Product3",
    id: 3
  },
  {
    title : "Product4",
    id: 4
  },
  {
    title : "Product5",
    id: 5
  }
]

export const fetchListOfProducts = async() => {
  await new Promise((resolve)=>setTimeout(resolve,1000))
  return productList
}

export const addNewProduct = async(productName) => {
  await new Promise((resolve)=>setTimeout(resolve,1000))
  const newlyCreatedProduct = {
    id : productList.length+1,
    title : productName
  }

  productList.push(newlyCreatedProduct)

  return newlyCreatedProduct
}