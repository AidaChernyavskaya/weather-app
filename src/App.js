import React, {useState, useEffect} from "react";
import './styles/App.css';
import SearchField from "./components/SearchField/SearchField";
import CardItem from "./components/CardItem/CardItem";
import WeatherService from "./API/WeatherService";
import Location from './icons/location.png';
import CloudsBackground from './icons/clouds-background.png';

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
            <div className={'location'}>
                <input type={'image'} src={Location} className={'location__icon'}/>
                <h1 className={'location__name'}>Санкт-Петербург</h1>
            </div>
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
                ? <h1 style={{textAlign: 'center'}}>Loading</h1>
                : <CardItem forecast = {forecast} />}
            <input type={'image'} src={CloudsBackground} className={'clouds_background'}/>
        </div>
    );
}

export default App;
