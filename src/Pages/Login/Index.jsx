import LoginForm from "./LoginForm"
import toast, {Toaster} from 'react-hot-toast'

import { useRef, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import {axiosInstance} from './../../Lib/AxiosInstance'
import { userDataContext } from "../../Context/userDataContext"


export default function Login(){
    const inputUsername = useRef() 
    const inputPassword = useRef() 
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    
    const {setUser} = useContext(userDataContext)

    const onLogin = async () => { 
        try {
            setIsLoading(true)
            const username = inputUsername.current.value
            const password = inputPassword.current.value
            const response = await axiosInstance.get(`/users?username=${username}&password=${password}`)
            
            if(response.data.length === 0) throw({message : "Account not found"})
            toast.success("Login success") 
            setTimeout(() => {
                navigate('/')
            }, 1000)

            setUser(response.data[0].username)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <>
            <Toaster/>
            <h1 className="text-2xl flex justify-center pt-20">Login Form</h1>
            <div className="flex justify-center">
                <div className="w-[500px]">
                    <LoginForm inputRef={inputUsername} type="text" label="username"/>
                    <LoginForm inputRef={inputPassword} type="password" label="password"/>
                    
                    <div className="flex justify-end pt-5 gap-2">
                        <Link to={'/register'} className="flex start items-center text-primary">Don't have an account?</Link>
                        <button disabled={isLoading} onClick={onLogin} className="btn bg-primary text-white">
                            {isLoading? "Loading...": "Login"}
                        </button>
                        <Link to={'/'} className="btn">Close</Link>
                    </div>
                </div>
            </div>
        </>
    )
}