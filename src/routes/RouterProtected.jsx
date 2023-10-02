import { Outlet, Navigate } from "react-router-dom";
import {useAuth} from "../auth/authProvider";
const routerProtected = () =>{
    const auth = useAuth();
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default routerProtected;