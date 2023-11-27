import RegisterForm from "./RegisterForm"
import { Link } from "react-router-dom"
import { useRef } from "react"
import toast, {Toaster} from 'react-hot-toast'
import { useState } from "react"
import {axiosInstance} from './../../Lib/AxiosInstance'


export default function Register(){

    const inputUsername = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputConfirmPassword = useRef()

    const [isLoading, setIsLoading] = useState(false)

    const onRegister = async () => {
        try {
            // STEP-1. Validation Input
            if(inputUsername.current.value.length < 5) throw({message: "Minimum username character 5"})
            if(!inputEmail.current.value.includes('@')) throw({message: "Email not valid"})
            if(inputPassword.current.value !== inputConfirmPassword.current.value) throw({message: "Password not same"})
            
            
            // SET STATE
            setIsLoading(true)
            
            // Check email is already or not?
            const response = await axiosInstance.get(`/users?email=${inputEmail.current.value}`)
            if(response.data.length > 0) throw({message: "Email already exist"})
            
            // STEP-2. Send Post Request
            const getId = axiosInstance.get(`/users`).length
            await axiosInstance.post(`/users`, {
                id: getId-1,
                username: inputUsername.current.value, 
                email: inputEmail.current.value, 
                password: inputPassword.current.value})
            toast.success("Register Success!")
            
            inputUsername.current.value = ''
            inputEmail.current.value = ''
            inputPassword.current.value = ''
            inputConfirmPassword.current.value = ''
        } catch (error) {
            toast.error(error.message)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <>
        <Toaster/>
            <h1 className="text-2xl flex justify-center pt-20">Register Form</h1>
            <div className="flex justify-center">
                <div className="w-[500px]">
                    <RegisterForm inputRef={inputUsername} type="text" label="username"/>
                    <RegisterForm inputRef={inputEmail} type="email" label="email"/>
                    <RegisterForm inputRef={inputPassword} type="password" label="password"/>
                    <RegisterForm inputRef={inputConfirmPassword} type="password" label="confirm password"/>
                    
                    <div className="flex justify-end pt-5 gap-2">
                        <Link to={'/login'} className="flex start items-center text-primary">Already have an account?</Link>
                        <button disabled={isLoading} onClick={onRegister} className="btn bg-primary text-white">
                            {isLoading? "Loading..." : "Submit"}
                        </button>
                        <Link to={'/'} className="btn">Close</Link>
                    </div>
                </div>
            </div>
        </>
    )
}