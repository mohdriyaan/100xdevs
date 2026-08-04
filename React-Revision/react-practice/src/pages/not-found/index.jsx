import { Link } from "react-router-dom"
export const NotFoundPage = () => {
  return <div>
    <h3>This page dosen't exist</h3>
    <Link to="/recipe-list">Go back to recipe List Page</Link>
  </div>
}