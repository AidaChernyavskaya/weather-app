import React from 'react';
import styles from "./Htag.module.css";

const Htag = ({tag, children}) => {
    switch(tag) {
        case "h1":
            return <h1 className={styles.location__name}>{children}</h1>;
        case "h2":
            return <h2>{children}</h2>;
        case "h3":
            return <h3 className={styles.card__date}>{children}</h3>;
        default:
            return <></>;
    }
};

export default Htag;