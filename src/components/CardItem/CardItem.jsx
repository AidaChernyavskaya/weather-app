import React, {useEffect, useState} from 'react';
import MyHtag from "../MyHtag/MyHtag";
import TimePoints from "../TimePoints/TimePoints";
import CardIcons from "../CardIcons/CardIcons";
import TempValue from "../TempValue/TempValue";
import cn from "classnames";
import styles from "./CardItem.module.css";

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

const CardItem = ({forecast, variation}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }

    let content;
    if (variation === 0) {
        content =   [
            <MyHtag tag={"h3"} key={0}>{getDateStr(forecast, 0)}</MyHtag>,
            <TimePoints forecast={forecast} key={1}/>,
            <CardIcons forecast={forecast} order={[0, 2, 4, 6]} key={2}/>,
            <TempValue forecast={forecast} order={[0, 2, 4, 6]} key={3}/>
        ];
    } else if (variation === 1){
        content = [
            <MyHtag tag={"h3"} key={0}>{getDateStr(forecast, 0)}</MyHtag>,
            <TimePoints forecast={forecast} key={1}/>,
            <CardIcons forecast={forecast} order={[0, 2, 4, 6]} key={2}/>,
            <TempValue forecast={forecast} order={[0, 2, 4, 6]} key={3}/>,
            <hr className={styles.divider} key={4}/>,
            <MyHtag tag={"h3"} key={5}>{getDateStr(forecast, 7)}</MyHtag>,
            <TimePoints forecast={forecast} key={8}/>,
            <CardIcons forecast={forecast} order={[8, 10, 12, 14]} key={9}/>,
            <TempValue forecast={forecast} order={[8, 10, 12, 14]} key={3}/>
        ]
    } else if (variation === 2){
        content = <h1>BOO</h1>;
    }

    return (
        <div className={cn(styles.card, styles.outline, variation ? styles.horizontal : styles.vertical)}>
            {content}
        </div>
    );
};

export default CardItem;