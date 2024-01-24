import Contact from "../Contact";
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom"


describe("grouped test cases for contact us",()=>{
//as suppose we neeed to call a function before every test we can do this as done below
    // beforeAll(()=>{
    //     console.log("before all test" )
    // })
    // beforeEach(()=>{ //mainly used for cleanup tasks
    //     console.log("before earch test it will be called")
    // })
    // //and similarly we also have after all and after Each
    // afterAll(()=>{
    //     console.log("after all test called")
    // })
    // afterEach(()=>{
    //     console.log("after each")
    // })

test ("should render contact comp.",()=>{
  
    render(<Contact/>)
    //quering 
    const heading=screen.getByRole("heading")//it actually returns a react component
    //assertions
    expect(heading).toBeInTheDocument()

})
//we can hover on these .get etc to know about them if needed 
it("should render button", ()=>{ //it is just alias for test
    render(<Contact/>)
    const button= screen.getByRole("button")//screen represents what is actually going to be rendered on user screen thats why it is used .getby is used for specify which element we are checking 
    expect(button).toBeInTheDocument()//this function is provided by jest-dom
})
test("should render text",()=>{
    render(<Contact/>)// in every  case we have to render a component in which we are testing otherwise it will show error
    const text=screen.getByText("Submit")//  in case of text it is casesensitive so even if i write sumbit instead of Submit it will fail
    expect(text).toBeInTheDocument()
})
test("it will tell if multiple input box are rendered", ()=>{
    render(<Contact/>)
    const input=screen.getAllByRole("textbox")//input box is represented by text box
    expect(input.length).toBe(2) // this how we can test for no of element in component
})
})
//and suppose we have multiple test cases in single file to what we can do is we can
//group them into one like this


