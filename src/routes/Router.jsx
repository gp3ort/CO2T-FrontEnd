import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Home from "../pages/Home"
import LayoutMain from "../layouts/LayoutMain"
import {createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
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