import RestrauntCard ,{ withHighRating}from "./RestrauntCard"
import {  useEffect, useState } from "react"
//import { useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
//import UserContext from "../utils/UserContext"

function Body()
{   
    //const data=useContext(UserContext)
    const [cardList , setCardList]= useState([])
    const [filter ,setFilter]=useState([])
    const sttatus=useOnlineStatus()
    const [search ,setSearch]=useState("")
    const RestrauntHighlyRated=withHighRating(RestrauntCard)
    //it is assigned to const instead of using it as it is because in this passing of prop will become easy
    //here withHighRating(RestrauntCard) is actually returning a function so in below code when we give props to it it goes to tat returning functions not to initial level
    //console.log(cardList)
    useEffect(()=>{
        
        list()
       }, []
       )
       
    const list = async ()=>{
        try {
        const a = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9680035&lng=77.55520659999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await a.json();
        const {restaurants}=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        
         setCardList(restaurants)
         setFilter(restaurants)
        
            
        } catch (error) {
            console.log(error)
        }    
    }
    //return() we can use ternary operator here instead of if case
    if(sttatus===false){
        return <h1>you are currently offline please check your connection
        </h1>
    }
    return cardList.length === 0 ? (<Shimmer/>) : (
        
        <div className=" bg-purple-200">
            
        <div className=" flex py-6 my-2">
            <input 
            data-testid="inputSearch"
            className= " pl-2  border border-solid border-black  rounded-lg  ml-2 mr-3 shadow-lg bg-blue-50"type="text" 
            value={search} 
            onChange={(e)=>{ //this e is provided to us by browsers
            setSearch(e.target.value)
            }}/>
            <button className=" bg-green-100 rounded-lg px-2 hover:bg-pink-200 shadow-lg" onClick={()=>{
                const filterList= cardList.filter((res)=>{
                    return res.info.name.toLowerCase().includes(search.toLowerCase()) 
                    // console.log(res.info.name.toLowerCase())
                    // console.log(res.info.name.toLowerCase().includes(search.toLowerCase()) )
                 })
                 
                 setFilter(filterList)
            }}>Search</button>
            {/* <span>{data.loggedUser}</span> */}
        </div>
     
    <div className=" flex flex-wrap">
        
       {filter.map((data)=>{
        const {id, name ,cloudinaryImageId,areaName,avgRating,sla}=data?.info
        return(<Link key={id} to={"/restraunt/"+id} >
            {avgRating>4.3 ?<RestrauntHighlyRated name={name} image={cloudinaryImageId} add={areaName} rating={avgRating} duration={sla.slaString}/>
            :<RestrauntCard  name={name} image={cloudinaryImageId} add={areaName} rating={avgRating} duration={sla.slaString}/>
            }
            </Link>)
    })
    }
    </div>
    </div>
    )   
}
export default Body


