import React from 'react';
import styles from "./CardIcons.module.css";
import Sun from "../../icons/sunny.png";
import Moon from "../../icons/moon.png";
import SunCloud from "../../icons/sun+cloud.png";
import MoonCloud from "../../icons/moon+cloud.png";
import Clouds from "../../icons/clouds.png";
import DarkClouds from "../../icons/dark-clouds.png";
import Rain from "../../icons/rain.png";
import Lightning from "../../icons/lightning.png";
import Snow from "../../icons/snow.png";

const ICONS_ASSOCIATIONS = {
    '01d': Sun,
    '01n': Moon,
    '02d': SunCloud,
    '02n': MoonCloud,
    '03d': Clouds,
    '03n': Clouds,
    '04d': DarkClouds,
    '04n': DarkClouds,
    '09d': Rain,
    '09n': Rain,
    '10d': Rain,
    '10n': Rain,
    '11d': Lightning,
    '11n': Lightning,
    '13d': Snow,
    '13n': Snow
};

const getIcons = (forecast, order) => {
    let icons = [];
    let myIcons = [];
    forecast.list.forEach(el => icons.push(el.weather[0].icon));
    icons.map(icon => myIcons.push(ICONS_ASSOCIATIONS[icon]));
    return [myIcons[order[0]], myIcons[order[1]], myIcons[order[2]], myIcons[order[3]]];
}

const CardIcons = ({forecast, order}) => {
    let icons = getIcons(forecast, order);

    return (
        <div className={styles.card__icons}>
            {icons.map((icon, index) =>
                <input type={'image'} key={index} src={icon} alt={'weather icon'}/>
            )}
        </div>
    );
};

export default CardIcons;