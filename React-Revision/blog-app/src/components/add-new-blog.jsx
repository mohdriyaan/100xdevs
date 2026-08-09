import { useDispatch, useSelector } from "react-redux"
import { addBlogData, handleInputChange, resetFormData } from "../redux/features/blogSlice"

export const AddNewBlog = () => {
  const dispatch = useDispatch()
  const {title, description} = useSelector((state)=>state.blog.formData)

  const onChangeInput = (event) => {
    dispatch(handleInputChange({
      name : event.target.name,
      value : event.target.value
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(addBlogData({
      title,
      description
    }))
    dispatch(resetFormData())
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Enter Blog Title</label>
          <input 
          type="text" 
          name="title"
          value={title}
          placeholder="Enter Blog Title"
          onChange={onChangeInput}
          />
        </div>
        <div>
          <label>Enter Blog Description</label>
          <input 
          type="text" 
          name="description"
          value={description}
          placeholder="Enter Blog Description"
          onChange={onChangeInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}