import React, {useState, useEffect} from "react";
import './styles/App.css';
import SearchField from "./components/SearchField/SearchField";
import CardItem from "./components/CardItem/CardItem";
import WeatherService from "./API/WeatherService";
import CloudsBackground from './icons/clouds-background.png';
import Location from "./components/Location/Location";
import Loader from "./components/Loader/Loader";
import MyButton from "./components/MyButton/MyButton";

function App() {

    const [forecast, setForecast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        fetchForecast();
    }, [])

    async function fetchForecast() {
        setIsLoading(true);
        setTimeout(async () => {
            const forecast = await WeatherService.getForecast(498817);
            setForecast(forecast);
            setIsLoading(false);
        })
    }

    return (
        <div className="App">
            <div className={'navbar'}></div>
            <SearchField/>
            {isLoading
                ? <Loader/>
                : <Location forecast = {forecast} />}
            <div className={'interval'}>
                <MyButton duration={'1 день'} isActive={true}/>
                <MyButton duration={'3 дня'} isActive={false}/>
                <MyButton duration={'5 дней'} isActive={false}/>
            </div>
            {isLoading
                ? <Loader/>
                : <CardItem forecast = {forecast} />}
            <input type={'image'} src={CloudsBackground} className={'clouds_background'} alt={'background'}/>
            <Loader/>
        </div>
    );
}

export default App;
