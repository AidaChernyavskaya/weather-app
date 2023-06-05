import React, {useState, useEffect} from 'react';
import LogoBig from "../icons/logo-big.png";
import LogoBigDark from "../icons/logo-big-dark.png";
import SearchField from "../components/SearchField/SearchField";
import CloudsBackground from "../icons/clouds-background.png";
import WeatherService from "../API/WeatherService";
import Navbar from "../components/Navbar/Navbar";
import {ThemeContext} from "../contexts/ThemeContext";

const Main = () => {
    const [name, setName] = useState('');
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        if (name.length !== 0) fetchCoords();
    }, [name])

    async function fetchCoords() {
        setTimeout(async () => {
            const coords = await WeatherService.getCoords(name);
            setPlaces(coords);
        })
    }

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className={theme === 'dark' ? 'dark' : undefined}>
                    <Navbar logo={false} page={'main'}/>
                    <input type={'image'} src={theme === 'dark' ? LogoBigDark : LogoBig} alt={''} className={'logo'}/>
                    <SearchField
                        text={'Узнай погоду в своем городе...'}
                        setName={setName}
                        name={name}
                        places={places}
                        setPlaces={setPlaces}
                        theme={theme}
                    />
                    <input
                        type={'image'}
                        src={CloudsBackground}
                        className={'clouds_background clouds_background__main'}
                        alt={'Big logo'}
                    />
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default Main;