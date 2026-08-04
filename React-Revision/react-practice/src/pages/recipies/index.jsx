import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/use-fetch"
import { useWindowResize } from "../../hooks/use-window-resize"

export const RecipeList = () => {

  const location = useLocation() // gives current path name
  console.log(location)

  const {data, loading, error} = useFetch("https://dummyjson.com/recipes")
  const windowSize = useWindowResize()

  if(loading) return <h1>Fetching Recipes! Please wait..</h1>
  return (
    <div>
      <h1 style={{color : windowSize.width<768 ? "red" : "black"}}>Recipe List Page</h1>
      <h3>Current window width is {windowSize.width} and window height is {windowSize.height}</h3>
      <ul>
        {data?.recipes?.length > 0 ?
        data?.recipes.map((recipesItem)=>
          <div>
            <img src={recipesItem?.image}></img>
            <label>{recipesItem?.name}</label>
          </div>
        )  
        : null}
      </ul>
    </div>
  )
} 