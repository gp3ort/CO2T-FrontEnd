
/* import Router from "./routes/Router";
 */import {RouterProvider} from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithToken } from "./redux/actions/userActions";
import { useEffect } from "react";

import Login from "./pages/Login"
import SignupBusiness from "./pages/SignupBusiness"
import Home from "./pages/Home"
import Entity from "./pages/Entity"
import LayoutMain from "./layouts/LayoutMain"
import {BrowserRouter, Routes} from "react-router-dom"
import { Route } from "react-router-dom"
import SignupPerson from "./pages/signupPerson"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Cart from "./pages/Cart"
import Pay from "./pages/Pay"
import Certificate from "./pages/Certificate"
import ProtectedRoute from "./auth/ProtectedRoute"
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("miToken");
    if (token) {
      dispatch(signInWithToken());
    }
  }, []);
  const miToken = localStorage.getItem("miToken"); 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/login' />
        <Route element={<SignupPerson/>} path='/signupPerson' />
        <Route  element={<SignupBusiness/>} path='/signupBusiness'/>
        <Route  element={<Entity/>} path='/entity'/>

        <Route element={<ProtectedRoute active={miToken}/>}>
          <Route element={<Cart/>} path='/cart' />
        </Route>

        <Route element={<ProtectedRoute active={miToken}/>}>
          <Route element={<Pay/>} path='/pay' />
        </Route>

        <Route element={<ProtectedRoute active={miToken}/>}>
          <Route  element={<Certificate/>} path='/certificate'/>
        </Route>

        <Route element={<LayoutMain />}>
          <Route element={<Home/>} path='/' />

          <Route element={<ProtectedRoute active={miToken}/>}>
            <Route  element={<Projects/>} path='/projects'/>
          </Route>

          <Route element={<ProtectedRoute active={miToken}/>}>
            <Route element={<Project/>} path='/project/:id' />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
