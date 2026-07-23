import { useEffect, useState } from "react"

export const FetchDataEffect = () => {
  const [data, setData] = useState([])
  
  useEffect(()=>{
    async function fetchData(){
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const jsonData = await res.json()
      setData(jsonData)
    }

    fetchData()
  },[])

  return(
    <div>
      {/* 1st method */}
      {/* {data.map((posts,index)=>{
        if(index===0){
          return <div key={index}>
            <p>Title : {posts.title}</p>
          </div>
        }
      })} */}

      {/* 2nd method */}
      {/* {data.length > 0 && data[0]["title"]} */}

      {/* 3rd method */}
      <p>Title : {data[0] ? data[0]["title"] : "Loading..."}</p>
    </div>
  )
}