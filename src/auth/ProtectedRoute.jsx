import { replace } from "formik";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ active, redirectPath = '/login' }) =>{ 
        if(!active){
            return <Navigate to={redirectPath } replace/>
        }
        return <Outlet/>
    
}

export default ProtectedRoute;