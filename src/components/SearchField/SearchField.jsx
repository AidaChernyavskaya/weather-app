import React, {useState} from 'react';
import Search from "../../icons/search.png";
import Close from "../../icons/close.png";
import styles from './SearchField.module.css';
import cn from "classnames";

const SearchField = ({text, setName}) => {
    const [value, setValue] = useState('');

    const submitSearch = () => {
        setName(value);
        setValue('');
    }

    const cancelSearch = () => {
        setValue('');
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
            <div className={styles.search_field}>
                <input
                    type={'text'}
                    className={cn(styles.input, value.length >= 1 && styles.input__open)}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={text}
                    onKeyDown={handleKeyPress}
                />
                <div className={value.length >= 1 ? styles.dropdown : styles.dropdown__close}>
                    <hr />
                    <ul className={styles.dropdown__menu}>
                        <li className={styles.dropdown__item}>Example1</li>
                        <li className={styles.dropdown__item}>Example11111111111</li>
                    </ul>
                </div>

                <input
                    type={'image'}
                    src={Search}
                    className={styles.search_icon}
                    onClick={submitSearch}
                    alt={'search icon'}
                />
                {value !== '' &&
                    <input
                        type={'image'}
                        src={Close}
                        className={styles.close_icon}
                        onClick={cancelSearch}
                        alt={'close icon'}
                    />
                }
            </div>
        </div>
    );
};

export default SearchField;