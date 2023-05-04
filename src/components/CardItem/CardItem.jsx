import React, {useEffect, useState} from 'react';
import Wind from "../../icons/wind.png";
import Clouds from "../../icons/clouds.png";
import Clear from "../../icons/sunny.png";
import styles from "./CardItem.module.css";
import cn from 'classnames';

const MONTHS = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
];

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
    forecast.list.forEach(el => icons.push(el.weather[0].icon));
    console.log(icons);
    return [icons[0], icons[2], icons[4], icons[6]];
}

const CardItem = ({forecast}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }
    let timeBreakpoints = getTimeBreakpoints(forecast);
    let icons = getIcons(forecast);

    // const getIcon = (i) => {
    //     let iconsArr = [];
    //     forecast.list.forEach(el => iconsArr.push(el.weather[0].main));
    //     console.log(iconsArr);
    //     return Clouds;
    // }

    return (
        <div className={cn(styles.card, styles.outline)}>
            <h3 className={styles.card__date}>{getDateStr(forecast)}</h3>
            <div className={styles.card__breakpoints}>
                {timeBreakpoints.map((point, index) => <p key={index}>{point}</p>)}
            </div>
            <div className={styles.card__icons}>
                {icons.map((icon, index) =>
                    <input type={'image'} key={index} src={`http://openweathermap.org/img/w/${icon}.png`} alt={'weather icon'}/>
                )}
            </div>
            <div className={styles.card__temperature_heading}>
                <p>Температура воздуха, °C</p>
            </div>
            <div className={styles.card__temperature}>
                <p>{Math.trunc(forecast.list[0].main.temp)}</p>
                <p>{Math.trunc(forecast.list[2].main.temp)}</p>
                <p>{Math.trunc(forecast.list[4].main.temp)}</p>
                <p>{Math.trunc(forecast.list[6].main.temp)}</p>
            </div>
        </div>
    );
};

export default CardItem;