import React from 'react';
import MyHtag from "../MyHtag/MyHtag";
import TimePoints from "../TimePoints/TimePoints";
import CardIcons from "../CardIcons/CardIcons";
import TempValue from "../TempValue/TempValue";
import styles from "./InnerCard.module.css";

const MONTHS = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
];

const getDateStr = (forecast, i) => {
    let time = new Date(forecast.list[i].dt_txt);
    console.log(time);
    return `${time.getDate()} ${MONTHS[time.getMonth()]} ${time.getFullYear()} года`;
};

const InnerCard = ({forecast, order, dateNum}) => {
    return (
        <div className={styles.inner_card}>
            <MyHtag tag={"h3"} key={0}>{getDateStr(forecast, dateNum)}</MyHtag>
            <TimePoints forecast={forecast} key={1}/>
            <CardIcons forecast={forecast} order={order} key={2}/>
            <TempValue forecast={forecast} order={order} key={3}/>
        </div>
    );
};

export default InnerCard;