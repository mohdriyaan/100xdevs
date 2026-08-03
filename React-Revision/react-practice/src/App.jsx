import { ContextButtonComponent } from "./components/context-concept/button"
import { ContextTextComponent } from "./components/context-concept/text"
import { FormComponent } from "./components/form"
import { FunctionalComponent, FunctionalComponent1 } from "./components/functional-components"
import { LoginComponent } from "./components/login"
import { ProductList } from "./components/products"
import { RegisterComponent } from "./components/register"
import { UseReducerExample } from "./components/use-reducer-example"
import { Users } from "./components/users"

const dummyData = ["Product1","Product2","Product3"]

function App() {
  return <div>
    {/* <FunctionalComponent />
    <FunctionalComponent1 /> */}
    {/* <ProductList listOfProds={dummyData} name="Riyaan" city="Hyderabad"/> */}
    {/* <Users /> */}
    {/* <ContextButtonComponent />
    <ContextTextComponent /> */}
    {/* <UseReducerExample /> */}
    {/* <FormComponent /> */}
    <div style={{display:"flex" , justifyContent:"space-around"}}>
      <LoginComponent />
      <RegisterComponent />
    </div>
  </div>
}

export default App
