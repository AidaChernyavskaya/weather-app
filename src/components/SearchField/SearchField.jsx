import React, {useState} from 'react';
import Search from "../../icons/search.png";
import Close from "../../icons/close.png";
import styles from './SearchField.module.css';

const SearchField = ({text}) => {
    const [value, setValue] = useState('');

    const submitSearch = () => {
        console.log(value);
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
                    className={styles.input}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={text}
                    onKeyDown={handleKeyPress}
                />
                <input type={'image'} src={Search} className={styles.search_icon} onClick={submitSearch}/>
                {value !== '' &&
                    <input type={'image'} src={Close} className={styles.close_icon} onClick={cancelSearch}/>
                }
            </div>
        </div>
    );
};

export default SearchField;