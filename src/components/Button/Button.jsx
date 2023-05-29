import React from 'react';
import styles from './Button.module.css';
import cn from "classnames";

const Button = ({duration, isActive, variation, onClick, num, theme}) => {
    return (
        <button className={cn(styles.interval__button, theme === 'dark' ? styles.dark : undefined)} onClick={onClick}>
            <p className={num === variation ? styles.interval__duration_active : styles.interval__duration}>{duration}</p>
            <div className={num === variation ? styles.interval__line_active : styles.interval__line}></div>
        </button>
    );
};

export default Button;