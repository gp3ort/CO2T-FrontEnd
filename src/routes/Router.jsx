import Login from "../pages/Login"
import SignupBusiness from "../pages/SignupBusiness"
import Home from "../pages/Home"
import Entity from "../pages/Entity"
import LayoutMain from "../layouts/LayoutMain"
import {createBrowserRouter} from "react-router-dom"
import SignupPerson from "../pages/signupPerson"
import Projects from "../pages/Projects"
import Project from "../pages/Project"
import Cart from "../pages/Cart"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signupBusiness",
    element: <SignupBusiness/>
  },
  {
    path: "/SignupPerson",
    element: <SignupPerson/>
  },
  {
    path: "/entity",
    element: <Entity/>
  },
  {
    path: "/",
    element: <LayoutMain/>,
    children: [  
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/project/:id",
        element: <Project/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  },
])

export default router;