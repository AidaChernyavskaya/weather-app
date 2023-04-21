import React, {useState, useEffect} from "react";
import './styles/App.css';
import SearchField from "./components/SearchField/SearchField";
import CardItem from "./components/CardItem/CardItem";
import PostService from "./API/WeatherService";

function App() {

    const [forecast, setForecast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        fetchForecast();
    }, [])

    async function fetchForecast() {
        setIsLoading(true);
        setTimeout(async () => {
            const forecast = await PostService.getForecast();
            setForecast(forecast);
            setIsLoading(false);
        })
    }

    return (
        <div className="App">
            <SearchField/>
            {isLoading
                ? <h1 style={{textAlign: 'center'}}>Loading</h1>
                : <CardItem forecast = {forecast}/>}
        </div>
    );
}

export default App;
