import { useState } from "react"

export const ShoppingList = () => {
  const [shoppingItem, setShoppingItem] = useState([])

  const [nameInput, setNameInput] = useState("")
  const [qtyInput, setQtyInput] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    
    if(nameInput.trim() && qtyInput.trim()){
      const item = {
        name : nameInput,
        quantity : parseInt(qtyInput)
      }
      
      setShoppingItem((prevItems) => [...prevItems, item ])

      setNameInput("")
      setQtyInput("")
    }
    
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="nameInput">
          <input type="text" placeholder="Enter name" value={nameInput} onChange={(e)=>setNameInput(e.target.value)} />
        </label>
        <label htmlFor="qtyInput">
          <input type="text" placeholder="Enter quantity" value={qtyInput} onChange={(e)=>setQtyInput(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Shopping Information</h2>
      {shoppingItem.map((item,index)=>{
        return <div key={index}>
          <p>Name : {item.name}</p>
          <p>Quantity : {item.quantity}</p>
        </div>
      })}
    </div>
  )
}