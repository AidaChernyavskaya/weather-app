import React, {useEffect, useState} from 'react';
import styles from "./CardItem.module.css";
import cn from 'classnames';
import Loader from "../Loader/Loader";
import CardIncides from "../CardIncides/CardIncides";

const CardItem = ({forecast, isLoading, variation}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }

    return (
        <div>
            {isLoading
            ? <Loader/>
            : <div className={cn(styles.card, styles.outline)}>
                    <CardIncides forecast={forecast} variation={variation}/>
              </div>
            }
        </div>
    );
};

export default CardItem;