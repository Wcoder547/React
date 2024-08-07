import { useState } from "react"
import {Link,useNavigation} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {login as authLogin} from "../store/authSlice"

import {useForm} from "react-hook-form"
import authservice from "../appwrite/auth"
import {Button,Input,Logo} from "./index"

function Login() {
    const navigate = useNavigation()
    const dispatch = useDispatch()
   const{register,handleSubmit} =useForm()
   const[Error,setError]=useState("")


 const login = async (data)=>{
    setError("")
    try {
        const session = await authservice.Login(data)
        if(session){
           const userData =await authservice.getCurrentUser()
           if(userData){
            dispatch(authLogin(data))
           }
           navigate("/")
        }
    } catch (error) {
        setError(error.message)
    }
 }
  return (
    <div className="flex items-center justify-center w-full"> 
    
    <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl border p-10  border-black/10">
    
    <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%"/>
        </span>
    </div>
    <h2 className="text-center text-2xl font-bold leading-tight"> sign in to your account!!</h2>
    <p
    className="mt-2 text-center text-base text-black/60">Don&apos;t have any account ? &nbsp;
    <Link className="font-medium text-primary transition-all duration-200 hover:underline" to="/signup">SignUp</Link>
    </p>
    {Error && <p className="text-red-600 mt-8 text-center">{Error}</p>}
    <form onSubmit={handleSubmit(login)} className="mt-8">
        <div className="space-y-5">
            <Input label="email"
             type="email"
             placeholder="enter your email"
             {...register("email",{required:true, validate:{matchPatern:(value)=>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email must be a valid Address",
             }})}
            />
            <Input label="password"    
             type="password"
             placeholder="enter your password"
             {...register("password",{required:true})}
            />
            <Button type="submit" className="w-full">SignIn</Button>
        </div>
    </form>
    </div> 
    
    </div>
  )
}

export default Login