import { CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import toast, {Toaster} from 'react-hot-toast'
import LoginForm from "../../Pages/Login/LoginForm";
import { useRef, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
{/* <CiHeart className="h-6 w-6 text-white"/> */}

export function ModalLogin(){
    const inputUsername = useRef() 
    const inputPassword = useRef() 

    const [isLoading, setIsLoading] = useState(false)

    const onLogin = async () => { 
        try {
            setIsLoading(true)
            
            const response = await axios.get('http://localhost:5000/users/')
            const getUser = response.data.find(val => {
                return val.username == inputUsername.current.value && val.password == inputPassword.current.value
            })

            if(getUser){
                toast.success("Login Success")
            }else{
                toast.error("Account not found")
            }
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <>
            <button className="btn btn-outline text-white" onClick={()=>document.getElementById('modalLogin').showModal()}>
                Login
            </button>
            <dialog id="modalLogin" className="modal">
                <div className="modal-box form-control">                    
                    <Toaster/>
                    <h1 className="text-2xl flex justify-center pt-20">Login Form</h1>
                    <div className="flex justify-center">
                        <div className="w-[500px]">
                            <LoginForm inputRef={inputUsername} type="text" label="username"/>
                            <LoginForm inputRef={inputPassword} type="password" label="password"/>
                        </div>
                    </div>

                    <div className="modal-action">
                        <div className="items-center flex">
                            <Link to={'/register'} className="btn items-center justify-start mr-16">Dont have an account? Signup.</Link>
                        </div>
                        <form method="dialog">
                            <button disabled={isLoading} onClick={onLogin} className="btn bg-primary text-white">
                                {isLoading? "Loading...": "Login"}
                            </button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export function ModalRegister(){
    return(
        <>
            <button className="btn btn-ghost btn-circle" onClick={()=>document.getElementById('modalRegister').showModal()}>
                <CiUser className="h-6 w-6 text-white"/>
            </button>
            <dialog id="modalRegister" className="modal">
            <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">REGISTER</h3>
                    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-primary text-white">Submit</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}