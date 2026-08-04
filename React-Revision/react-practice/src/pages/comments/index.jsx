import { useFetch } from "../../hooks/use-fetch"
export const CommentsList = () => {
  const {data, loading, error} = useFetch("https://dummyjson.com/comments")

  if(loading) return <h1>Fetching List Of Comments. Please Wait...</h1>

  return (
    <div>
      <h1>Comments List Page</h1>
      <ul>
          {data?.comments.length > 0 
          ? data?.comments.map((comment)=><div>
            <label>{comment?.body}</label>
            <p>{comment?.likes}</p>
          </div>)
          : null}
      </ul>
    </div>
  )
} 