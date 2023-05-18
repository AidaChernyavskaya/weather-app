import Navbar from "../Navbar/Navbar";
import Forecast from "../../pages/Forecast";


export const routes = [
    {path: '/about', element: <h3>Hi</h3>},
    {path: '/main', element: <h3>Boo</h3>},
    {path: '/forecast', element: <Forecast/>},
]
