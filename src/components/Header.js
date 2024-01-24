import {  useState } from "react"
//import { useContext, useState } from "react"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
//import UserContext from "../utils/UserContext"
import {  useSelector } from "react-redux"
function Header(){
    const status=useOnlineStatus()
    const [log ,setLog]=useState("Login")
    //const data= useContext(UserContext)
    
        //we are specifying to part we need to subscribe  so that we can read it and use it
    const cartItems=useSelector((store)=> store.cart.items);
    
    //const cartItems=useSelector((store)=>{store.cart.items});dont use {}here ((store)=>{store.cart.items}) or use return 
    // const store=useSelector((store)=>store)
    // const cartItems= store.cart.items
    //we can also do it like this but this not tht optimum way of doing it as it will be accefted even a little change 
    //happens in ouur store so it is crucial to subscribe the particular portion of the store to optimize it better
    
    
    //we are subscribing to our store using our selector
    return(
<div className="flex  bg-pink-100 shadow-lg   justify-between ">
    <div >
            <img  className=" w-28 " src={LOGO_URL}/>
    </div>
   <ul className="flex items-center   ">
    <li className="  m-4">Online Status: {status===true?"🟢":"🔴"}</li>   
    {/* <li>{data.loggedUser} </li>  */}
    <li className="  m-4"><Link to="/">Home</Link></li>
    <li className="  m-4"><Link to="/about">About</Link></li>
    <li className="  m-4"><Link to="/contact">Contact</Link></li>
    <li className="  m-4"><Link to ="/grocery">Grocery</Link></li>
    <li className="  m-4"><Link to="/cart">Cart-{cartItems.length}</Link></li>
    <li className="  m-4"><button className=" bg-green-100 rounded-lg px-2 hover:bg-pink-200 shadow-lg " onClick={()=>{
    setLog(log === "Login"? "Logout":"Login")
   }}>{log}</button></li>
   </ul>
</div>

)
    }
    export default Header