import { useState,useEffect } from "react"
import { menu_URL } from "../utils/constants"
const useRestrauntMenu =(resId)=>{
    const [resMenu , setResMenu]= useState(null)
   useEffect(()=>{
    fetchData()},[])
    const fetchData=async()=>{
        const data= await fetch(menu_URL+resId)
        const json =await data.json()
        setResMenu(json?.data)
        //console.log(resMenu)
    }
    

    return resMenu
    
}
export default useRestrauntMenu