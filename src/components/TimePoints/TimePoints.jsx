import React from 'react';
import styles from "./TimePoints.module.css";

const getTimeBreakpoints = (forecast) => {
    let breakpoints = [];
    let time = new Date(forecast.list[0].dt_txt);
    let hours = time.getHours();
    if (hours === 0 || hours === 3){
        breakpoints = ['Ночь', 'Утро', 'День', 'Вечер'];
    } else if (hours === 6 || hours === 9) {
        breakpoints = ['Утро', 'День', 'Вечер', 'Ночь'];
    } else if (hours === 12 || hours === 15) {
        breakpoints = ['День', 'Вечер', 'Ночь', 'Утро'];
    } else {
        breakpoints = ['Вечер', 'Ночь', 'Утро', 'День'];
    }
    return breakpoints;
};

const TimePoints = ({forecast}) => {
    let timeBreakpoints = getTimeBreakpoints(forecast);

    return (
        <div className={styles.card__breakpoints}>
            {timeBreakpoints.map((point, index) => <p key={index}>{point}</p>)}
        </div>
    );
};

export default TimePoints;