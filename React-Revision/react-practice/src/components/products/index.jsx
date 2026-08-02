import { useState, useEffect } from "react"
import { ProductItem } from "./components/product-item"
import "./style.css"

export const ProductList = ({listOfProds,name,city}) => {

  const [flag, setFlag] = useState(false)
  const [count, setCount] = useState(0)
  const [changeStyle, setChangeStyle] = useState(false)

  function renderTextBlock(getFlag){
    return getFlag ? <h4>Name is {name}, he/she belongs to {city}.</h4> : <h4>Hello world</h4> 
  }

  const handleToggleText = () => {
    setFlag(!flag)
  }

  const handleIncreaseCount = () => {
    setCount(count + 1)
  }

  useEffect(()=>{
    console.log("run only once")
    setFlag(!flag)
  },[])

  useEffect(()=>{
    if(count===10){
      setChangeStyle(true)
    }
    return ()=>{
      console.log("component is unmounted")
    }
  },[count])


  return <div>
    <h3 className="title">ECommerce Project</h3>
    <button onClick={handleToggleText}>Toggle Text</button>
    {/* <ProductItem /> */}
    {renderTextBlock(flag)}

    <div>
      <p>Count is {count}</p>
      <button style={{backgroundColor : changeStyle ? "black" : "white", color : changeStyle ? "#ffffff" : "#000"}} onClick={handleIncreaseCount}>Increase Count</button>
    </div>
    
    <ul>
      {listOfProds.map((item,index) => 
        <ProductItem singleProductItem={item} keyProp={index}/>
      )}
    </ul>
  </div>
}

