import React from 'react';
import styles from "./TempValue.module.css";

const getTemperature = (forecast, order) => {
    let temperature = [];
    forecast.list.forEach(el => {
        let num = Math.trunc(el.main.temp);
        temperature.push(num > 0 ? `+${num}` : `${num}`);
    });
    return [temperature[order[0]], temperature[order[1]], temperature[order[2]], temperature[order[3]]];
}

const TempValue = ({forecast, order}) => {
    let temperature = getTemperature(forecast, order);

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