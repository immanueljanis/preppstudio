import { Link } from "react-router-dom"
import { CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";

import Drawer from '../Drawer/index'
import {ModalLogin, ModalRegister} from "../Modal/Index"
import { userDataContext } from "../../Context/userDataContext";
import { useContext } from "react";
import toast, {Toaster } from "react-hot-toast";


export default function Navbar(){

    const {user, setUser} = useContext(userDataContext)

    const isLogin = () => {
        if(!user){
            return(
                <>
                    <Link to={'/login'} className="btn btn-outline text-white">Login</Link>
                    {/* USER */}
                    <Link to={'/register'}>
                        <CiUser className="h-6 w-6 text-white mx-3"/>
                    </Link>
                </>
            )
        }
        return(
            <>
            <div className="flex gap-4">
                <button className="btn btn-outline text-white">{user}</button>  
                <button onClick={() => 
                    {setUser(null)
                    toast.success("Logout Success")}
                } className="btn btn-outline text-white">Logout</button>
            </div>
            </>
        )
    }

    return(
        <>
            <Toaster/>
            <div className="navbar top-0 bg-primary font-display">
                <div className="navbar-start">
                    <div className="w-24">
                        <Link to={'/'}>
                            <img src="https://preppstudio.com/assets/prepp-studio-5609aeb0.png" alt="preppLogo" />
                        </Link>
                    </div>
                    <div>
                        <ul className="menu menu-horizontal text-white text-sm ml-10">
                            <li><Link>HOT ITEMS</Link></li>
                            <li><Link>MONOLINE T-SHIRT</Link></li>
                            <li><Link>COLLABORATION</Link></li>
                            <li><Link>SEARCH</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="navbar-end">
                    {/* Login */}

                    {isLogin()}
                    {/* <Link to={'/login'} className="btn btn-outline text-white">Login</Link> */}
                    {/* <ModalLogin className="btn btn-outline text-white"/> */}
                    
                    

                    {/* WISHLIST */}
                    {/* <ModalLogin/> */}
                    <CiHeart className="h-6 w-6 text-white"/>


                    {/* CART */}
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <CiShoppingCart className="h-7 w-7 text-white" />
                            <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </label>

                </div>
            </div>
        </>
    )
}