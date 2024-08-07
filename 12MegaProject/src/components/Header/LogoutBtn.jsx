import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
const LogoutBtn = () => {
    const dispatch  = useDispatch()
    const logoutHandler =()=>{
        authService.Logout().then(()=>dispatch(logout)).finally()
    }
  return (
    <div className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Logout</div>
  )
}

export default LogoutBtn