import React, {useState} from 'react';
import Search from "../../icons/search.png";
import Close from "../../icons/close.png";
import styles from './SearchField.module.css';
import cn from "classnames";

const SearchField = ({text, setName, name, places}) => {
    const submitSearch = () => {
        setName('');
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
    }

    return (
        <div className={styles.search}>
            <div className={cn (styles.search_field, name.length >= 1 && styles.search_field__open )}>
                <input
                    type={'image'}
                    src={Search}
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
                        src={Close}
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
                        <a
                            href={`/forecast?lat=${place.lat.toFixed(1)}&lon=${place.lon.toFixed(1)}`}
                            className={styles.dropdown__item}
                            key={index}
                        >
                            {place.name}<span>, {place.state}</span>
                        </a>
                    )}
                    {places.length === 0 && <div className={styles.warning}>Местоположение не найдено</div>}
                </ul>
            </div>
        </div>
    );
};

export default SearchField;