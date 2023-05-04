import React, {useState, useEffect} from "react";
import './styles/App.css';
import SearchField from "./components/SearchField/SearchField";
import CardItem from "./components/CardItem/CardItem";
import WeatherService from "./API/WeatherService";
import CloudsBackground from './icons/clouds-background.png';
import Location from "./components/Location/Location";
import Loader from "./components/Loader/Loader";

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
                <button className={'interval__button'}>
                    <p className={'interval__duration'}>1 день</p>
                    <div className={'interval__line'}></div>
                </button>
                <button className={'interval__button'}>
                    <p className={'interval__duration'}>3 дня</p>
                    <div className={'interval__line'}></div>
                </button>
                <button className={'interval__button'}>
                    <p className={'interval__duration'}>5 дней</p>
                    <div className={'interval__line'}></div>
                </button>
            </div>
            {isLoading
                ? <Loader/>
                : <CardItem forecast = {forecast} />}
            <input type={'image'} src={CloudsBackground} className={'clouds_background'}/>
            {/*<Loader/>*/}
        </div>
    );
}

export default App;
