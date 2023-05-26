import React, {useState, useEffect} from 'react';
import LogoBig from "../icons/logo-big.png";
import SearchField from "../components/SearchField/SearchField";
import CloudsBackground from "../icons/clouds-background.png";
import WeatherService from "../API/WeatherService";
import Navbar from "../components/Navbar/Navbar";

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
            console.log(coords);
        })
    }

    return (
        <div>
            <Navbar logo={false}/>
            <input type={'image'} src={LogoBig} alt={''} className={'logo'}/>
            <SearchField
                text={'Узнай погоду в своем городе...'}
                setName={setName}
                name={name}
                places={places}
                setPlaces={setPlaces}
            />
            <input
                type={'image'}
                src={CloudsBackground}
                className={'clouds_background clouds_background__main'}
                alt={'Big logo'}
            />
        </div>
    );
};

export default Main;