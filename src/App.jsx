
import router from "./routes/Router";
import {RouterProvider} from "react-router-dom";
/* import { useDispatch } from "react-redux"; */

function App() {
/*   const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(signInWithToken());
    }
  }, []); */
  return <RouterProvider router={router}/>
}

export default App;
