import { useSelector } from "react-redux"
import { image_URL } from "../utils/constants"


const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    return(
    cartItems.map((res)=>{
    return(<div className=" mx-auto w-1/2 align-middle" key={res?.id}>
        <div data-testid="cartItems" className="  border-b-2 flex justify-between my-4 py-4"  > 
    <div className=" w-2/3">
        <ul>
    <li>{res?.name}</li>
    <li className=" text-sm text-gray-800">₹{res?.price/100 || res?.defaultPrice/100}</li>
    <li className=" text-xs text-gray-500">{res?.description}</li>
        </ul>
    </div>
    <div>
    {/* <button onClick={()=>handleAdd(data)} className=" absolute ml-9 mt-16 text-xs p-2 bg-black text-white rounded-xl">Add+</button> */}
    <img className="  w-[118px] h-[96px] rounded-lg" src={image_URL+res?.imageId} alt="image not available"></img>    
    
    </div>
</div></div>)}))
}
export default Cart