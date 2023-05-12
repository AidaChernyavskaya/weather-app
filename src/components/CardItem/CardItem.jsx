import React, {useEffect, useState} from 'react';
import styles from "./CardItem.module.css";
import cn from 'classnames';
import Loader from "../Loader/Loader";
import MyHtag from "../MyHtag/MyHtag";
import TimePoints from "../TimePoints/TimePoints";
import CardIcons from "../CardIcons/CardIcons";

export const MONTHS = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
];

const getDateStr = (forecast) => {
    let time = new Date(forecast.list[0].dt_txt);
    return `${time.getDate()} ${MONTHS[time.getMonth()]} ${time.getFullYear()} года`;
};

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

    let temperature = getTemperature(forecast);

    return (
        <div>
            {isLoading
            ? <Loader/>
            : <div className={cn(styles.card, styles.outline)}>
                    <MyHtag tag={"h3"}>{getDateStr(forecast)}</MyHtag>
                    <TimePoints forecast={forecast}/>
                    <CardIcons forecast={forecast}/>
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