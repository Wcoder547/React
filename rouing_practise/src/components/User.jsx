
import { useParams } from "react-router-dom"
const User = () => {
    const{userId}=useParams()
  return (
    
    <div className="text-center text-3xl font-semibold py-4">User:{userId}</div>
  )
}

export default User