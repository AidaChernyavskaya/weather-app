import React, {useEffect, useState} from 'react';
import styles from "./CardItem.module.css";
import cn from 'classnames';
import Loader from "../Loader/Loader";
import MyHtag from "../MyHtag/MyHtag";
import TimePoints from "../TimePoints/TimePoints";
import CardIcons from "../CardIcons/CardIcons";
import TempValue from "../TempValue/TempValue";

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

const CardItem = ({forecast, isLoading}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }

    return (
        <div>
            {isLoading
            ? <Loader/>
            : <div className={cn(styles.card, styles.outline)}>
                    <MyHtag tag={"h3"}>{getDateStr(forecast)}</MyHtag>
                    <TimePoints forecast={forecast}/>
                    <CardIcons forecast={forecast}/>
                    <TempValue forecast={forecast}/>
                </div>
            }

        </div>
    );
};

export default CardItem;