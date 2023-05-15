import React from 'react';
import styles from "./TempValue.module.css";

const getTemperature = (forecast) => {
    let temperature = [];
    forecast.list.forEach(el => {
        let num = Math.trunc(el.main.temp);
        temperature.push(num > 0 ? `+${num}` : `${num}`);
    });
    return [temperature[0], temperature[2], temperature[4], temperature[6]];
}

const TempValue = ({forecast}) => {
    let temperature = getTemperature(forecast);

    return (
        <div>
            <p className={styles.card__temperature_heading}>Температура воздуха, °C</p>
            <div className={styles.card__temperature}>
                {temperature.map((temp, index) => <p key={index}>{temp}</p>)}
            </div>
        </div>
    );
};

export default TempValue;