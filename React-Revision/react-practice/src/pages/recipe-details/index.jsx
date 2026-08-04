import { useParams } from "react-router-dom"

export const RecipeDetailsPage = () => {
  const params = useParams()
  const {id} = params
  return <div>
    <h1>Recipe Details of Recipe Item {id}</h1>
  </div>
}