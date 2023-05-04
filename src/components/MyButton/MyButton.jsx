import React, {useState} from 'react';
import styles from './MyButton.module.css';

const MyButton = ({duration, isActive}) => {
    const [active, setActive] = useState(isActive);
    return (
        <button className={styles.interval__button} onClick={e => setActive(!active)}>
            <p className={active ? styles.interval__duration_active : styles.interval__duration}>{duration}</p>
            <div className={active ? styles.interval__line_active : styles.interval__line}></div>
        </button>
    );
};

export default MyButton;