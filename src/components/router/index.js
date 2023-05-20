import Navbar from "../Navbar/Navbar";
import Forecast from "../../pages/Forecast";
import Main from "../../pages/Main";


export const routes = [
    {path: '/about', element: <h3>Hi</h3>},
    {path: '/main', element: <Main/>},
    {path: '/forecast', element: <Forecast/>},
]
