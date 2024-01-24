import React, { Suspense , lazy } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestrauntMenu from "./components/RestrauntMenu"
//import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
//import Grocery from "./components/Grocery"
//import Shimmer from "./components/Shimmer"
//as to make our code less heavy and more optimized it is broken down into smaller
//  pieces so that all the componenets should not be inside just one js file and make it
//   too heavy and so thats why lazy import is used to import these type of components
const Grocery= lazy(()=>import("./components/Grocery"));
//const Grocery= lazy(()=>{import("./components/Grocery")});
//dont use {}inside import it throughs error

const root = ReactDOM.createRoot(document.getElementById("root"))

const AppLayout =()=>{
    
    return( 
        <Provider store={appStore}>
        <div>
            
         {/* <UserContext.Provider value={{loggedUser:"gagan"}}> */}
           <Header/>
           {/* </UserContext.Provider>
         <UserContext.Provider value={{loggedUser:"kkkk"}}>  */}
         <Outlet/>
         {/* </UserContext.Provider> */}
         
        </div>
        </Provider>
    )
}
const appRouter =createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children:[
            {
                path: "/",
                element:<Body/>

            },

            {
                path: "/about",
                element:<About/>
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restraunt/:resId",
                element:<RestrauntMenu/>

            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
                // element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
                //we can also show shimmer ui if we want fallback is like place holder
                //  until value inside suspence loads what suspense do is that it prevents
                //   crower to throw error beacuse when we try to load this component without
                //    it react did not find this component in initial js file because it was in
                //     another js file as the code was broken down into smaller chunks to optimize 
                //     it better


            }
        ],
        errorElement :<Error/>
    },
    

])

root.render(
 <RouterProvider router={appRouter}/>
    

)