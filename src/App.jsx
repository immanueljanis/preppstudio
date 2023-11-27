import Navbar from "./Components/Navbar/Index"
import Footer from "./Components/Footer/Index"
import { Outlet } from "react-router-dom"
import { userDataContext } from "./Context/userDataContext"
import { useState } from "react"


export default function App() {

  const [user, setUser] = useState(null)
  
  return (
    <userDataContext.Provider value={{user, setUser}}>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </userDataContext.Provider>
  )
}


