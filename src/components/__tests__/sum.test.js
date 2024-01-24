import { sum } from "../sum"
test ("it will return the sum of 2 no.s",()=>{
    const result=sum(3,4)
    //Assertion
    expect(result).toBe(7)
    //expect(result).not.toBe(6)
    // we can do not also

})