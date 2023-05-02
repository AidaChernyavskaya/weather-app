import React, {useEffect, useState} from 'react';
import Windy from "../../icons/wind.png";
import Cloudy from "../../icons/clouds.png";
import Sunny from "../../icons/sunny.png";
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

const CardItem = ({forecast}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }

    return (
        <div className={cn(styles.card, styles.outline)}>
            <h3 className={styles.card__date}>{getDateStr(forecast)}</h3>
            <div className={styles.card__breakpoints}>
                <p>Ночь</p>
                <p>Утро</p>
                <p>День</p>
                <p>Вечер</p>
            </div>
            <div className={styles.card__icons}>
                <input type={'image'} src={Windy}/>
                <input type={'image'} src={Cloudy}/>
                <input type={'image'} src={Sunny}/>
                <input type={'image'} src={Cloudy}/>
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