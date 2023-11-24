
import router from "./routes/Router";
import {RouterProvider} from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithToken } from "./redux/actions/userActions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("miToken");
    if (token) {
      dispatch(signInWithToken());
    }
  }, []);
  return <RouterProvider router={router}/>
}

export default App;
