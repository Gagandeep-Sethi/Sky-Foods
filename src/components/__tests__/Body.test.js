import "@testing-library/jest-dom"
import { fireEvent, render ,screen } from "@testing-library/react"
import Body from "../Body"
import Mock_Data_Name from "../mocks/resListMock.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
global.fetch=jest.fn(()=>{  //global is global screen on which it is being displayed and as the fetch() is provided to us by browser and here while testing we are running it on jest dom so to provide that fetch()like env we do this 
    return Promise.resolve({      //and as fetch() returns a promise we use Promise.resolve 
        json:()=>{                //and again it is resolve as it is done in json 
            return Promise.resolve(Mock_Data_Name) // and this Mock_Data is mock for the data which was returned during fetching
        }
    })
})

it("should render body comp. with search button",async()=>{
    // to resolve state we have to cover our render inside it and it returns a promise so we have to await is and to awit we need to make it async and act also take callback func which is again a async function
    await act(async()=>{
        render(<BrowserRouter>    
            {/* as Link function is provided by reac router to that works properly we need to wrap this function inside BrowserRouter    */}
         <Body/>

         </BrowserRouter>
         )
    })
    const cardsBeforeFilter=screen.getAllByTestId("cards")//this id was given to to the div rendering res. cards so with the help of this we can check the length of recards displayed by using search
    expect(cardsBeforeFilter.length).toBe(20)
    const search=screen.getByRole("button",{name:"Search"})
    //console.log(search) //we can also do console.log and this return react element
    const inputBox=screen.getByTestId("inputSearch")
    fireEvent.change(inputBox ,{target:{value:"pizza"}})//first argument is what we are changing and second argument is (e)=>{} this function as e is provided to us by browsers to simulate it we do this
    fireEvent.click(search)
    const cardsAfterFilter=screen.getAllByTestId("cards")
    expect(cardsAfterFilter.length).toBe(2)
    expect(search).toBeInTheDocument()
   
    
})