import Login from "../pages/Login"
import SignupBusiness from "../pages/SignupBusiness"
import Home from "../pages/Home"
import Entity from "../pages/Entity"
import LayoutMain from "../layouts/LayoutMain"
import {createBrowserRouter} from "react-router-dom"
import SignupPerson from "../pages/signupPerson"

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

    ]
  },
])

export default router;