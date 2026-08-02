import { useReducer } from "react"

const initialState = {
  showTextFlag : false,
  changeTextStylesFlag : false 
}

function reducer(state,action){
  switch (action.type) {
    case "HIDE_TEXT":
      return {
        ...state,
        showTextFlag : false
      };
    case "SHOW_TEXT":
      return {
        ...state,
        showTextFlag : true
      };
    case "CHANGE_TEXT_STYLE":
      return {
        ...state,
        changeTextStylesFlag : !state.changeTextStylesFlag
      };
  
    default:
      return state;
  }
}

export const UseReducerExample = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  return <div>
    {state?.showTextFlag ? <h3 style={{backgroundColor : state?.changeTextStylesFlag ? "yellow" : "red" }}>Use Reducer hook Example</h3> : null }
    <button onClick={()=>dispatch({type : "HIDE_TEXT"})}>Hide Text</button>
    <button onClick={()=>dispatch({type : "SHOW_TEXT"})}>show Text</button>
    <button onClick={()=>dispatch({type : "CHANGE_TEXT_STYLE"})}>Change Text Styles</button>
  </div>
}