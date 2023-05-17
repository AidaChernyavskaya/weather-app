import React, {useEffect, useState} from 'react';
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

const CardItem = ({forecast, variation}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }

    let content;
    if (variation === 0) {
        content =   [<MyHtag tag={"h3"} key={0}>{getDateStr(forecast)}</MyHtag>,
            <TimePoints forecast={forecast} key={1}/>,
            <CardIcons forecast={forecast} key={2}/>,
            <TempValue forecast={forecast} key={3}/>];
    } else if (variation === 1){
        content = <h1>HI</h1>;
    } else if (variation === 2){
        content = <h1>BOO</h1>;
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default CardItem;