import "@testing-library/jest-dom"
import RestrauntCard from "../RestrauntCard"
import Mock_Card from "../mocks/resCardMock.json"
import { render ,screen } from "@testing-library/react"

test("should render a restraunt card component",()=>{
    render(<RestrauntCard name={Mock_Card.name} image={Mock_Card.image} add={Mock_Card.add} rating={Mock_Card.rating} duration={Mock_Card.duration}/>)
    const name=screen.getByText("kkk")
    expect(name).toBeInTheDocument()
})
//this is how to test for components which needs a mock data