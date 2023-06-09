import React, {useEffect, useState} from 'react';
import SearchField from "../components/SearchField/SearchField";
import Loader from "../components/Loader/Loader";
import Location from "../components/Location/Location";
import Button from "../components/Button/Button";
import CardItem from "../components/CardItem/CardItem";
import CloudsBackground from "../icons/clouds-background.png";
import WeatherService from "../API/WeatherService";
import {useSearchParams} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import {ThemeContext} from "../contexts/ThemeContext";

const SPB_LON = 30.19;
const SPB_LAT = 59.9;

const Forecast = () => {
    const [forecast, setForecast] = useState([]);
    const [name, setName] = useState('');
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [variation, setVariation] = useState(0);
    const [params, setParams] = useSearchParams();

    const lat = params.get('lat');
    const lon = params.get('lon');

    useEffect (() => {
        fetchForecast();
    }, [])

    useEffect(() => {
        if (name.length !== 0) fetchCoords();
    }, [name])

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

    async function fetchCoords() {
        setTimeout(async () => {
            const coords = await WeatherService.getCoords(name);
            setPlaces(coords);
        })
    }

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className= {theme === 'dark' ? 'dark' : undefined}>
                    <Navbar logo={true} page={'forecast'}/>
                    <SearchField
                        text={'Поиск...'}
                        setName={setName}
                        name={name}
                        places={places}
                        setPlaces={setPlaces}
                        theme={theme}
                    />
                    {isLoading
                        ? <Loader/>
                        : <div>
                            <Location forecast = {forecast}/>
                            <div className={'interval'}>
                                <Button
                                    duration={'1 день'} num={0}
                                    onClick={() => setVariation(0)} variation={variation}
                                    theme={theme}
                                />
                                <Button
                                    duration={'2 дня'} num={1}
                                    onClick={() => setVariation(1)} variation={variation}
                                    theme={theme}
                                />
                                <Button
                                    duration={'3 дня'} num={2}
                                    onClick={() => setVariation(2)} variation={variation}
                                    theme={theme}
                                />
                            </div>
                            <CardItem forecast={forecast} variation={variation} theme={theme}/>
                        </div>}
                    <input
                        type={'image'}
                        src={CloudsBackground}
                        className={'clouds_background clouds_background__forecast'}
                        alt={'background'}
                    />
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default Forecast;