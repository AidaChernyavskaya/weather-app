import React, {useEffect, useState} from 'react';
import SearchField from "../components/SearchField/SearchField";
import Loader from "../components/Loader/Loader";
import Location from "../components/Location/Location";
import MyButton from "../components/MyButton/MyButton";
import CardItem from "../components/CardItem/CardItem";
import CloudsBackground from "../icons/clouds-background.png";
import WeatherService from "../API/WeatherService";

const Forecast = () => {
    const [forecast, setForecast] = useState([]);
    const [coords, setCoords] = useState([]);
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [variation, setVariation] = useState(0);

    useEffect (() => {
        fetchForecast();
        fetchCoords();
    }, [])

    async function fetchForecast() {
        setIsLoading(true);
        setTimeout(async () => {
            const forecast = await WeatherService.getForecast(59.9, 30.3);
            setForecast(forecast);
            setIsLoading(false);
        })
    }

    async function fetchCoords() {
        setIsLoading(true);
        setTimeout(async () => {
            const coords = await WeatherService.getCoords('Москва');
            setCoords(coords);
            setIsLoading(false);
            console.log(coords[0].lat);
        })
    }

    return (
        <div>
            <div className="App">
                <SearchField text={'Поиск...'} setName={setName}/>
                {isLoading
                    ? <Loader/>
                    : <Location forecast = {forecast} />}
                <div className={'interval'}>
                    <MyButton duration={'1 день'} num={0} onClick={() => setVariation(0)} variation={variation}/>
                    <MyButton duration={'2 дня'} num={1} onClick={() => setVariation(1)} variation={variation}/>
                    <MyButton duration={'3 дня'} num={2} onClick={() => setVariation(2)} variation={variation}/>
                </div>
                {isLoading
                    ? <Loader/>
                    : <CardItem forecast={forecast} variation={variation}/>
                }
                <input
                    type={'image'}
                    src={CloudsBackground}
                    className={'clouds_background clouds_background__forecast'}
                    alt={'background'}
                />
            </div>
        </div>
    );
};

export default Forecast;