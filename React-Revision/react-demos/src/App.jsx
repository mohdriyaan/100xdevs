import { UserProfile } from "./UserProfile"
import { UserProvider } from "./UserContext"
import { UpdateUser } from "./UpdateUser"

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  )
}

export default App