import React from 'react';
import styles from './Location.module.css';
import LocationIcon from '../../icons/location.png';

const Location = ({forecast}) => {
    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }
    return (
        <div className={styles.location}>
            <input type={'image'} src={LocationIcon} className={styles.location__icon} alt={'location icon'}/>
            <h1 className={styles.location__name}>{forecast.city.name}</h1>
        </div>
    );
};

export default Location;