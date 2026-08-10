import { create } from "zustand"

export const useCounter =  create((set)=>{
  return {
    count : 0,
    listOfProducts : [],
    handleIncrement : () => set((state)=>({
      count : state.count + 1
    })),
    handleDecrement : () => set((state)=>({
      count : state.count - 1
    })),
    fetchListOfProducts : async() => {
      const res = await fetch("https://dummyjson.com/products")
      const result = await res.json()

      set({
        listOfProducts : result?.products
      })
    } 
  }
})

