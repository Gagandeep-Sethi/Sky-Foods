import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Cart from "../Cart"
import Header from "../Header"
import MenuItems from "../MenuItems"
import Mock_Data from "../mocks/resMenuMock.json"
import RestrauntMenu from "../RestrauntMenu"

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            const moo=Promise.resolve(Mock_Data)
            return (moo)
            
        }
    })
})





it("should render , update , cart in header and cart comp.", async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                
                <RestrauntMenu/>
                <Cart/>
                <Header/>
                <MenuItems/>
                

            </Provider>
            </BrowserRouter>
        )
    })
    const accordin=screen.getByText("Shake & Drink(7)")//checking here if the accordion is displayed o screen on not
    
    fireEvent.click(accordin)//checking here if after clicking it menu items displays or not
    
    expect(screen.getAllByTestId("items").length).toBe(7)
    const btn= screen.getAllByTestId("addbtn")//checking here if on clicking add button item gets added to cart or not or whether it updates cart- in eader component or not
    fireEvent.click(btn[0])
    expect(screen.getByText("Cart-1")).toBeInTheDocument()
    fireEvent.click(btn[1])
    expect(screen.getByText("Cart-2")).toBeInTheDocument()//checking again here if on clicking add button item gets added to cart or not or whether it updates cart- in eader component or not
    expect(screen.getAllByTestId("cartItems").length).toBe(2)//checking if the cart is getting filled after clicking on add btn or not
    
})


//integrated testing when components are interdependent on each other we have to do it ike this 
//