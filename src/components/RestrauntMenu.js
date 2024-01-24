import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestrauntMenu from "../utils/useRestrauntMenu"
import MenuItems from "./MenuItems"
import { useState } from "react"

const RestrauntMenu = ()=>{   
    const {resId}=useParams()
    const resMenu=useRestrauntMenu(resId)
    const [showIndex ,setShowIndex]=useState()
    if(resMenu===null){
        return <Shimmer/>
    }
    
    const {name, totalRatingsString,areaName ,avgRating ,cuisines}=resMenu?.cards[0]?.card?.card?.info
    const data =resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    
    
    return(
         <div className=" mx-auto w-1/2  align-middle  ">
             <div className="my-6 py-4 flex justify-between border-b-2 ">
                 <div className=" flex justify-start">
                     <ul>
                  <li className="py-2  font-bold">{name}</li>
                  <li className=" text-xs text-gray-500">{cuisines.join(" , ")}</li>
                  <li className=" text-xs text-gray-500">{areaName}</li>
                  </ul>
                  </div>
                  <div className=" pl-1 pr-1 border w-1/12 flex justify-end">
                     <ul>
                     <li className=" border-b-2">★{avgRating}</li>
                     <li>{totalRatingsString}</li>
                     </ul>
                  </div>
             </div>
            
            {data.map((x,i)=>{
                return <MenuItems key={x?.card?.card?.title} showIndex={i==showIndex ?true :false} item={x?.card?.card} setShowIndex={()=>{setShowIndex(i)}}/>
            })}

            
        </div>
    )
 
}
export default RestrauntMenu
































