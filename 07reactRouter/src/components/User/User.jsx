import { useParams } from "react-router-dom"

function User() {
  const {userId} =useParams();  
  
  return (
    <div className="bg-gray-600 text-2xl text-center text-white p-3">User {userId}</div>
  )
}

export default User