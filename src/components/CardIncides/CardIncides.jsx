import React from 'react';
import MyHtag from "../MyHtag/MyHtag";
import TimePoints from "../TimePoints/TimePoints";
import CardIcons from "../CardIcons/CardIcons";
import TempValue from "../TempValue/TempValue";

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

const CardIncides = ({forecast}) => {
    return (
        <div>
            <MyHtag tag={"h3"}>{getDateStr(forecast)}</MyHtag>
            <TimePoints forecast={forecast}/>
            <CardIcons forecast={forecast}/>
            <TempValue forecast={forecast}/>
        </div>
    );
};

export default CardIncides;