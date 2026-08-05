import { useMemo, useState } from "react"
import { useFetch } from "../../hooks/use-fetch"

export const UseMemoExample = () => {
  const {data, loading} = useFetch("https://dummyjson.com/products")
  const [flag, setFlag] = useState(false)

  const filterProductByPrice =  useMemo(()=>{
    const productsArr = data?.products

    console.log("testing if it is being rendered..")

    return productsArr?.length > 0 
    ? productsArr?.filter((item)=>item.price > 10) 
    : []
  },[data?.products])

  if(loading) return <h1>Loading Data! Please wait..</h1>

  return (
    <div>
      <h1 style={{color:flag ? "red" : "black"}}>Use Memo</h1>
      <button onClick={()=>{
        setFlag(!flag)
      }}>Toggle Flag</button>
      <ul>
        {filterProductByPrice?.map(item => (
          <li key={item.id}>{item?.title}</li>
        ))}
      </ul>
    </div>
  )
}