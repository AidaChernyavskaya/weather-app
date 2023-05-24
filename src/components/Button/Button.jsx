import React from 'react';
import styles from './Button.module.css';

const Button = ({duration, isActive, variation, onClick, num}) => {
    return (
        <button className={styles.interval__button} onClick={onClick}>
            <p className={num === variation ? styles.interval__duration_active : styles.interval__duration}>{duration}</p>
            <div className={num === variation ? styles.interval__line_active : styles.interval__line}></div>
        </button>
    );
};

export default Button;