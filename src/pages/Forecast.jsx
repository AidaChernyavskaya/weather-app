import React, {useEffect, useState} from 'react';
import SearchField from "../components/SearchField/SearchField";
import Loader from "../components/Loader/Loader";
import Location from "../components/Location/Location";
import MyButton from "../components/MyButton/MyButton";
import CardItem from "../components/CardItem/CardItem";
import CloudsBackground from "../icons/clouds-background.png";
import WeatherService from "../API/WeatherService";
import {useSearchParams} from "react-router-dom";

const SPB_LON = 30.19;
const SPB_LAT = 59.9;

const Forecast = () => {
    const [forecast, setForecast] = useState([]);
    // const [coords, setCoords] = useState([]);
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [variation, setVariation] = useState(0);
    const [params, setParams] = useSearchParams();
    const lat = params.get('lat');
    const lon = params.get('lon');

    useEffect (() => {
        fetchForecast();
        // fetchCoords();
    }, [])

    async function fetchForecast() {
        if (lat == null || lon == null) {
            window.location.replace(`/forecast?lat=${SPB_LAT}&lon=${SPB_LON}`);
        }
        setIsLoading(true);
        setTimeout(async () => {
            const forecast = await WeatherService.getForecast(lat, lon);
            setForecast(forecast);
            setIsLoading(false);
        })
    }

    // async function fetchCoords() {
    //     setIsLoading(true);
    //     setTimeout(async () => {
    //         const coords = await WeatherService.getCoords('Москва');
    //         setCoords(coords);
    //         setIsLoading(false);
    //         console.log(coords[0].lat);
    //     })
    // }

    return (
        <div>
            <div className="App">
                <SearchField text={'Поиск...'} setName={setName}/>
                {isLoading
                    ? <Loader/>
                    : <div>
                        <Location forecast = {forecast} />
                        <div className={'interval'}>
                            <MyButton duration={'1 день'} num={0} onClick={() => setVariation(0)} variation={variation}/>
                            <MyButton duration={'2 дня'} num={1} onClick={() => setVariation(1)} variation={variation}/>
                            <MyButton duration={'3 дня'} num={2} onClick={() => setVariation(2)} variation={variation}/>
                        </div>
                        <CardItem forecast={forecast} variation={variation}/>
                    </div>}
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