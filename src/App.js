import React, {useState} from "react";
import './styles/App.css';
import Search from './icons/search.png';
import Close from './icons/close.png';

function App() {
    const [value, setValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            console.log(value);
            setValue('');
        }
        if (event.key === 'Escape'){
            setValue('');
        }
    }

    const submitSearch = () => {
        console.log(value);
        setValue('');
    }

    const cancelSearch = () => {
        setValue('');
    }

    return (
        <div className="App">
            <input
                type={'text'}
                className={'input'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={'Поиск...'}
                onKeyDown={handleKeyPress}
            />
            <input type={'image'} src={Search} className={'search_icon'} onClick={submitSearch}/>
            {value !== '' &&
                <input type={'image'} src={Close} className={'close_icon'} onClick={cancelSearch}/>
            }
        </div>
    );
}

export default App;
