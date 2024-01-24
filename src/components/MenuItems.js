//import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice"
import { image_URL } from "../utils/constants"
import { useState } from "react"
const MenuItems=({item,showIndex,setShowIndex})=>{
    //console.log(item)
    const dish= item?.itemCards
    const [click ,setClick]= useState(false)   // disable it  if you want all the extra list close expect the clicked one
    
    const handleClick=()=>{
        //setShowIndex()         //enable it hide belw it if you want all the extra list close expect the clicked one
        setClick(!click)
        
        
    }
    const dispatch=useDispatch()
    //useDispatch is used to dispatch that action
    const handleAdd=(data)=>{
        dispatch (addItems(data))
        //addItems:(state ,action)=>{
        //state.items.push(action.payload) 
        //here pixxa will be passed as action 
        //and action will be a object like this
        //action={
        //    payload:"pizza",
        //} this is how action willbe passed so if we ant to push item we do action.payload because that's what is containing actual value
        
    }

    
    //console.log(dish)
    //console.log(item)
    
    return(<div>
        <div   onClick={handleClick} className=" py-4 font-bold my-4  flex justify-between border-b-2  cursor-pointer">
            <span>{item?.title}({item?.itemCards?.length})</span>
            <span>🔽</span>
        </div>
        <div >
            {click &&
            // { showIndex &&              //enable it hide above it if you want all the extra list close expect the clicked one
            dish.map(res=>{
                const data=res?.card?.info
                return(<div data-testid="items" className="  border-b-2 flex justify-between my-4 py-4" key={res?.card?.info?.id}> 
                    <div className=" w-2/3">
                        <ul>
                    <li>{res?.card?.info?.name}</li>
                    <li className=" text-sm text-gray-800">₹{res?.card?.info?.price/100 || res?.card?.info?.defaultPrice/100}</li>
                    <li className=" text-xs text-gray-500">{res?.card?.info?.description}</li>
                        </ul>
                    </div>
                    <div>
                    <button data-testid="addbtn" onClick={()=>handleAdd(data)} className=" absolute ml-9 mt-16 text-xs p-2 bg-black text-white rounded-xl">Add+</button>
                    <img className="  w-[118px] h-[96px] rounded-lg" src={image_URL+res?.card?.info?.imageId} alt="image not available"></img>    
                    
                    </div>
                </div>)
            })

            }
        
        </div>
    </div>)
}
export default MenuItems