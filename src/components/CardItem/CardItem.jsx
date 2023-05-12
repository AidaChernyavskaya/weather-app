import React, {useEffect, useState} from 'react';
import Wind from "../../icons/wind.png";
import Clouds from "../../icons/clouds.png";
import Sun from "../../icons/sunny.png";
import DarkClouds from "../../icons/dark-clouds.png";
import Lightning from "../../icons/lightning.png";
import Moon from "../../icons/moon.png";
import MoonCloud from "../../icons/moon+cloud.png";
import Rain from "../../icons/rain.png";
import Snow from "../../icons/snow.png";
import SunCloud from "../../icons/sun+cloud.png";
import styles from "./CardItem.module.css";
import cn from 'classnames';
import Loader from "../Loader/Loader";
import MyHtag from "../MyHtag/MyHtag";

const MONTHS = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
];
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

const getDateStr = (forecast) => {
    let time = new Date(forecast.list[0].dt_txt);
    return `${time.getDate()} ${MONTHS[time.getMonth()]} ${time.getFullYear()} года`;
};

const getTimeBreakpoints = (forecast) => {
    let breakpoints = [];
    let time = new Date(forecast.list[0].dt_txt);
    let hours = time.getHours();
    if (hours === 0 || hours === 3){
        breakpoints = ['Ночь', 'Утро', 'День', 'Вечер'];
    } else if (hours === 6 || hours === 9) {
        breakpoints = ['Утро', 'День', 'Вечер', 'Ночь'];
    } else if (hours === 12 || hours === 15) {
        breakpoints = ['День', 'Вечер', 'Ночь', 'Утро'];
    } else {
        breakpoints = ['Вечер', 'Ночь', 'Утро', 'День'];
    }
    return breakpoints;
};

const getIcons = (forecast) => {
    let icons = [];
    let myIcons = [];
    forecast.list.forEach(el => icons.push(el.weather[0].icon));
    icons.map(icon => myIcons.push(ICONS_ASSOCIATIONS[icon]));
    return [myIcons[0], myIcons[2], myIcons[4], myIcons[6]];
}

const getTemperature = (forecast) => {
    let temperature = [];
    forecast.list.forEach(el => {
        let num = Math.trunc(el.main.temp);
        temperature.push(num > 0 ? `+${num}` : `${num}`);
    });
    return [temperature[0], temperature[2], temperature[4], temperature[6]];
}

const CardItem = ({forecast, isLoading}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }
    let timeBreakpoints = getTimeBreakpoints(forecast);
    let icons = getIcons(forecast);
    let temperature = getTemperature(forecast);

    return (
        <div>
            {isLoading
            ? <Loader/>
            : <div className={cn(styles.card, styles.outline)}>
                    <MyHtag tag={"h3"}>{getDateStr(forecast)}</MyHtag>
                    <div className={styles.card__breakpoints}>
                        {timeBreakpoints.map((point, index) => <p key={index}>{point}</p>)}
                    </div>
                    <div className={styles.card__icons}>
                        {icons.map((icon, index) =>
                            <input type={'image'} key={index} src={icon} alt={'weather icon'}/>
                        )}
                    </div>
                    <div className={styles.card__temperature_heading}>
                        <p>Температура воздуха, °C</p>
                    </div>
                    <div className={styles.card__temperature}>
                        {temperature.map((temp, index) => <p key={index}>{temp}</p>)}
                    </div>
                </div>
            }

        </div>
    );
};

export default CardItem;