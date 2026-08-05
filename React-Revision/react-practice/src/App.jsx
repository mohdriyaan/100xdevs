import { ContextButtonComponent } from "./components/context-concept/button"
import { ContextTextComponent } from "./components/context-concept/text"
import { FormComponent } from "./components/form"
import { FunctionalComponent, FunctionalComponent1 } from "./components/functional-components"
import { ProductList } from "./components/products"
import { UseReducerExample } from "./components/use-reducer-example"
import { Users } from "./components/users"
import { RecipeList } from "./pages/recipies"
import { CommentsList } from "./pages/comments"
import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom"
import { RecipeDetailsPage } from "./pages/recipe-details"
import { NotFoundPage } from "./pages/not-found"
import { Layout } from "./components/layout"
import { ReactHookFormExamplePage } from "./pages/react-hook-form-example"
import { Hooks } from "./pages/hooks"
import { UseMemoExample } from "./pages/hooks/use-memo"
import { UseCallbackExample } from "./pages/hooks/use-callback/index"

function CustomRoutes(){
  const element = useRoutes([
    {
      path : "/home", element : <Layout />,
      children : [
        {
          path : "recipe-list", element : <RecipeList />
        },
        {
          path : "comments-list", element : <CommentsList />
        },
        {
          path : "recipe-details/:id", element : <RecipeDetailsPage />
        }
      ]
    },
    {
      path : "*", element : <NotFoundPage />
    },
    {
      path : "/react-hook-form", element : <ReactHookFormExamplePage /> 
    },
    {
      path : "/hooks", element : <Hooks />
    },
    {
      path : "/use-memo", element : <UseMemoExample />
    },
    {
      path : "/use-callback", element : <UseCallbackExample />
    } 
  ])

  return element
}


const dummyData = ["Product1","Product2","Product3"]

function App() {
  const navigate = useNavigate()
  return <div>
    {/* <FunctionalComponent />
    <FunctionalComponent1 /> */}
    {/* <ProductList listOfProds={dummyData} name="Riyaan" city="Hyderabad"/> */}
    {/* <Users /> */}
    {/* <ContextButtonComponent />
    <ContextTextComponent /> */}
    {/* <UseReducerExample /> */}
    {/* <FormComponent /> */}
    <h1>Wecome to the Real World</h1>
    <div>
      <Link to="/home/recipe-list">Alternate way of navigating to recipe list page</Link>
    </div>
    <button onClick={()=>navigate("/home/recipe-list")} style={{background : "black", color:"white", cursor:"pointer"}}>Navigate to Recipe Lists Page</button>
    <button onClick={()=>navigate("/home/comments-list")} style={{cursor:"pointer"}}>Navigate to Comments List Page</button>
    {/* <Routes>
      <Route path="/home" element={<Layout />}>
        <Route path="recipe-list" element = {<RecipeList />} />
        <Route path="comments-list" element={<CommentsList />}/>
        <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />}/>
    </Routes> */}

    <CustomRoutes />
    
    
  </div>
}

export default App
