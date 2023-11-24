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
import Pay from "../pages/Pay"
import Certificate from "../pages/Certificate"

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
    path: "/signupPerson",
    element: <SignupPerson/>
  },
  {
    path: "/entity",
    element: <Entity/>
  },

  {
    path: "/pay",
    element: <Pay/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/certificate",
    element: <Certificate/>
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

    ]
  },
])

export default router;