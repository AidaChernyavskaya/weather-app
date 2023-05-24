import React from 'react';
import styles from './Location.module.css';
import LocationIcon from '../../icons/location.png';
import Htag from "../Htag/Htag";

const Location = ({forecast}) => {
    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center', marginBottom: '3rem'}}>Oшибка!</h1>
        )
    }
    return (
        <div className={styles.location}>
            <input type={'image'} src={LocationIcon} className={styles.location__icon} alt={'location icon'}/>
            <Htag tag={"h1"}>{forecast.city.name === '' ? 'Неизвестно' : forecast.city.name}</Htag>
        </div>
    );
};

export default Location;