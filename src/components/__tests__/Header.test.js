import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"


test("render header comp",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>

        </Provider>
        </BrowserRouter>
    )
    const button=screen.getByRole("button")
    // const button=screen.getByText("Login")
    // const button=screen.getByRole("button",{name:"Login"}) when we need to be more specific we can do both role and name to find the exact result
    expect(button).toBeInTheDocument()
})
test("render header comp",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>

        </Provider>
        </BrowserRouter>
    )
    const loginButton=screen.getByRole("button" , {name:"Login"})
    fireEvent.click(loginButton)//fireevent  is used when we need to check and fired event like on click 
    const logoutButton=screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument()
})
test("render header comp",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>

        </Provider>
        </BrowserRouter>
    )
    const cart=screen.getByText(/Cart/)//we use (/Cart/) //around our text if w need to know this particular  part is visible on so that we need not to be specific and write theexact string we can be more dynamic and it is known as rejex
    expect (cart).toBeInTheDocument()
})