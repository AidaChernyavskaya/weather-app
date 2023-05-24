import Forecast from "../../pages/Forecast";
import Main from "../../pages/Main";
import About from "../../pages/About";


export const routes = [
    {path: '/about', element: <About/>},
    {path: '/', element: <Main/>},
    {path: '/forecast', element: <Forecast/>},
]
