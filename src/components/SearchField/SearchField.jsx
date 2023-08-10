import React, {useState} from 'react';
import Search from "../../icons/search.png";
import SearchDark from "../../icons/search-dark.png";
import Close from "../../icons/close.png";
import CloseDark from "../../icons/close-dark.png";
import styles from './SearchField.module.css';
import cn from "classnames";
import {Link} from "react-router-dom";

const SearchField = ({text, setName, name, places, theme}) => {
    const length = places.length;
    let i = 0;

    const submitSearch = () => {
        setName('');
        if (places.length !== 0) {
            window.location.replace(`/weather-app/#/forecast?lat=${places[i].lat}&lon=${places[i].lon}`);
            window.location.reload();
        }
    }

    const cancelSearch = () => {
        setName('');
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            submitSearch();
        }
        if (event.key === 'Escape'){
            cancelSearch();
        }
        if (event.key === 'ArrowDown'){
            if (i < length){
                document.getElementById(`place${i}`).focus();
                i++;
            }
        }
        if (event.key === 'ArrowUp'){
            if (i > 0) {
                document.getElementById(`place${i-1}`).focus();
                i--;
            }
        }
    }

    return (
        <div className={cn(styles.search, theme === 'dark' ? styles.dark : undefined)}>
            <div className={cn (styles.search_field, name.length >= 1 && styles.search_field__open )}>
                <input
                    type={'image'}
                    src={theme === 'dark' ? SearchDark : Search}
                    className={styles.search_icon}
                    onClick={submitSearch}
                    alt={'search icon'}
                />
                <input
                    type={'text'}
                    className={styles.input}
                    value={name}
                    onChange={handleChange}
                    placeholder={text}
                    onKeyDown={handleKeyPress}
                />
                {name !== '' &&
                    <input
                        type={'image'}
                        src={theme === 'dark' ? CloseDark : Close}
                        className={styles.close_icon}
                        onClick={cancelSearch}
                        alt={'close icon'}
                    />
                }
            </div>
            <div className={name.length >= 1 ? styles.dropdown : styles.dropdown__close}>
                <hr />
                <ul className={styles.dropdown__menu}>
                    {places.map((place, index) =>
                        <Link
                            to={`/forecast?lat=${place.lat}&lon=${place.lon}`}
                            className={styles.dropdown__item}
                            key={index}
                            onKeyDown={handleKeyPress}
                            id={`place${index}`}
                        >
                            {place.name}<span>, {place.state}</span>
                        </Link>
                    )}
                    {places.length === 0 && <div className={styles.warning}>Местоположение не найдено</div>}
                </ul>
            </div>
        </div>
    );
};

export default SearchField;