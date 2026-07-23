import { useEffect } from "react"

export const BasicEffect = () => {
  useEffect(()=>{
    console.log("component rendered")
  },[])
}

