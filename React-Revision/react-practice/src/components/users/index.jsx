import { useEffect, useState } from "react"

export function Users() {
  const [usersList, setUsersList] = useState([])
  const [pending, setPending] = useState(false)

  async function fetchAllUsers(){
    try{
      setPending(true)
      const apiResponse = await fetch("http://dummyjson.com/users")
      const result = await apiResponse.json()
      
      setTimeout(()=>{
        if(result?.users){
          setUsersList(result?.users)
          setPending(false)
        }else{
          setUsersList([])
          setPending(false)
        }  
      },1500)
      
    }catch(err){
      setPending(false)
      console.log(error)
    }
  }

  const clickHandler = () => {
    fetchAllUsers()
  }

  // useEffect(()=>{
  //   fetchAllUsers()
  // },[])

  if(pending) return <h2>Fetching Data. Please Wait..</h2>

  return <div>
    <h1>All Users List</h1>
    <button onClick={clickHandler}>Fetch Users List</button>
    <ul>
      {
        usersList && usersList.length > 0 
        ?
        usersList.map((userItem)=> 
        <li>
          <p>
            {userItem?.firstName} {userItem?.lastName}
          </p>
        </li>
        ) 
        : 
        <h1>No users found! Please try again.</h1>
      }
    </ul>
  </div>
}