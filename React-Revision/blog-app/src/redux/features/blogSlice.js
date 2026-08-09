import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name : "blog",
  initialState : {
    formData : {
      title : "",
      description : ""
    },
    blogList : [] 
  },
  reducers : {
    handleInputChange : (state,action) => {
      const {name, value} = action.payload
      state.formData[name] = value
    },
    addBlogData : (state,action) => {
      state.blogList.push(action.payload)
    },
    resetFormData : (state)=>{
      state.formData.title = ""
      state.formData.description = ""
    }
  }
})

export const {handleInputChange, addBlogData, resetFormData} = blogSlice.actions

export default blogSlice.reducer