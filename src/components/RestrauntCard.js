import { image_URL } from "../utils/constants"
function RestrauntCard(props){
    
    return(
       <div data-testid="cards" className=" p-4 m-4 bg-gray-100 w-[250px] rounded-xl  shadow-2xl hover:bg-sky-100 ">
           <img className=" w-full h-48 rounded-md "src={image_URL +props.image}/>
           
           <ul >
              
       <li className=" mt-2 font-bold  py-2">{props.name}</li>
       <li>{props.add}</li>
       <li>{props.duration} minutes</li>
       <li>{props.rating} stars</li>
   
      </ul>
           
   
       </div>
    )
   }
   export const withHighRating=(RestrauntCard)=>{
    //so props are received at this level instead of initial level
    return (props)=>{
        return(<div>
        <label className=" absolute ml-4  bg-black text-white rounded-lg px-2" >High Ratings</label>
        <RestrauntCard {...props} />
        {/* here ...props is used because using ... we can transfer all the props without writing them agin for each value */}
        </div>)
        
    }

   }











   export default RestrauntCard