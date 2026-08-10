import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blogSlice"
import countReducer from "../features/counterSlice"

export const store = configureStore({
  reducer : {
    blog : blogReducer,
    counter : countReducer
  } 
})

