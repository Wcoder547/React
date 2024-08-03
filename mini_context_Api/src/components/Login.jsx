import{useContext, useState} from 'react'
import Usercontext from '../context/Usercontext.js'


const Login = () => {
    const [username, setusername] = useState("")
    const[password,setpassword]=useState("")
    const {setUser}=useContext(Usercontext)
    const handleLogin =(e)=>{
      e.preventDefault()
      setUser({username,password})
      console.log("form submited")
    }
  return (
    <>
  
    <input type="text"   value={username} onChange={(e)=>setusername(e.target.value)}/> 
    <input type="text"   value={password} onChange={(e)=>setpassword(e.target.value)} />
    <button  onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login