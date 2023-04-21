import React, {useEffect, useState} from 'react';
import Windy from "../../icons/wind.png";
import Cloudy from "../../icons/clouds.png";
import Sunny from "../../icons/sunny.png";
import styles from "./CardItem.module.css";
import cn from 'classnames';

const CardItem = ({forecast}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }
    // {forecast.list[0].dt_txt}

    console.log(forecast.city.name);
    console.log(!Object.keys(forecast).length);


    return (
        <div className={cn(styles.card, styles.outline)}>
            <h3 className={styles.card__date}>{forecast.list[0].dt_txt}</h3>
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
                <p>-1</p>
                <p>0</p>
                <p>+5</p>
                <p>+25</p>
            </div>
        </div>
    );
};

export default CardItem;