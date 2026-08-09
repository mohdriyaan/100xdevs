import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name : "blog",
  initialState : {
    formData : {
      title : "",
      description : ""
    }
  },
  reducers : {
    handleInputChange:(state,action)=>{

    }
  }
})

export const {handleInputChange} = blogSlice.actions

export default blogSlice.reducer