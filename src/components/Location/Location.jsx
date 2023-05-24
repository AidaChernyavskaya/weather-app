import React from 'react';
import styles from './Location.module.css';
import LocationIcon from '../../icons/location.png';
import MyHtag from "../MyHtag/MyHtag";

const Location = ({forecast}) => {
    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center', marginBottom: '3rem'}}>Oшибка!</h1>
        )
    }
    return (
        <div className={styles.location}>
            <input type={'image'} src={LocationIcon} className={styles.location__icon} alt={'location icon'}/>
            <MyHtag tag={"h1"}>{forecast.city.name === '' ? 'Неизвестно' : forecast.city.name}</MyHtag>
        </div>
    );
};

export default Location;