import { useEffect, useState } from "react";

export function useFetch(url,options={}){
  const [data, setData] = useState(null)
  const [loading,setLoading]= useState(false)
  const [error, setError] = useState(null)
  
  async function fetchData(){
    try {
      setLoading(true)
      const res = await fetch(url, {...options})
      
      if(!res.ok){
        throw new Error(res.statusText)
      }

      const result = await res.json()
      
      if(result){
        setData(result)
        setLoading(false)
        setError(null)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[url])

  return {
    data,
    loading,
    error
  }
}