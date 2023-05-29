import Forecast from "../../pages/Forecast";
import Main from "../../pages/Main";
import About from "../../pages/About";
import Error404 from "../../pages/Error404";


export const routes = [
    {path: '/about', element: <About/>},
    {path: '/main', element: <Main/>},
    {path: '/forecast', element: <Forecast/>},
    {path: '/error', element: <Error404/>},
]
