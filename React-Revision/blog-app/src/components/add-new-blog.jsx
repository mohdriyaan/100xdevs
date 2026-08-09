import { useDispatch } from "react-redux"

export const AddNewBlog = () => {
  const dispatch = useDispatch()
  
  const onChangeInput = (event) => {

  }
  return (
    <div>
      <form>
        <div>
          <label>Enter Blog Title</label>
          <input 
          type="text" 
          name="title"
          placeholder="Enter Blog Title"
          onChange={onChangeInput}
          />
        </div>
        <div>
          <label>Enter Blog Description</label>
          <input 
          type="text" 
          name="description"
          placeholder="Enter Blog Description"
          onChange={onChangeInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}