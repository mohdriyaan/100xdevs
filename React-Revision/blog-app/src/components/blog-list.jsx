import { useSelector } from "react-redux"

export const BlogList = () => {
  const blogList = useSelector((state)=>state.blog.blogList)
  return (
    <div>
      {blogList.length > 0 
      ? 
      blogList.map((data,index)=>(
        <div key={index}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      ))
      :
        <h3>No Data Added</h3>
      }
    </div>
  )
}