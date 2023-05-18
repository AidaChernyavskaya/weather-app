import React from 'react';
import cn from "classnames";
import styles from "./CardItem.module.css";
import InnerCard from "../InnerCard/InnerCard";

const CardItem = ({forecast, variation}) => {

    if(!Object.keys(forecast).length) {
        return (
            <h1 style={{textAlign: 'center'}}>Ошибочка!</h1>
        )
    }

    let content;
    if (variation === 0) {
        content =   [
            <InnerCard forecast={forecast} order={[0, 2, 4, 6]} dateNum={0} key={0}/>
        ];
    } else if (variation === 1){
        content = [
            <InnerCard forecast={forecast} order={[0, 2, 4, 6]} dateNum={0} key={0}/>,
            <div className={styles.divider} key={1}/>,
            <InnerCard forecast={forecast} order={[8, 10, 12, 14]} dateNum={7} key={2}/>,
        ]
    } else if (variation === 2){
        content = [
            <InnerCard forecast={forecast} order={[0, 2, 4, 6]} dateNum={0} key={0}/>,
            <div className={styles.divider} key={1}/>,
            <InnerCard forecast={forecast} order={[8, 10, 12, 14]} dateNum={7} key={2}/>,
            <div className={styles.divider} key={3}/>,
            <InnerCard forecast={forecast} order={[16, 18, 20, 22]} dateNum={14} key={4}/>,
        ]
    }

    return (
        <div className={cn(styles.card, styles.outline)}>
            {content}
        </div>
    );
};

export default CardItem;