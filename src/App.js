import React, {useState} from "react";
import './styles/App.css';
import SearchField from "./components/SearchField/SearchField";
import Search from "./icons/search.png";
import Windy from "./icons/wind.png";
import Sunny from "./icons/sunny.png";
import Cloudy from "./icons/clouds.png";
import CardItem from "./components/CardItem/CardItem";

function App() {

    return (
        <div className="App">
            <SearchField/>
            <CardItem/>
        </div>
    );
}

export default App;
