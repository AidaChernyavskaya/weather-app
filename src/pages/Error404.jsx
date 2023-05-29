import React from 'react';
import Illustration from "../icons/404.png";
import {ThemeContext} from "../contexts/ThemeContext";
import Navbar from "../components/Navbar/Navbar";

const Error404 = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className={theme === 'dark' ? 'dark' : undefined}>
                    <Navbar logo={true}/>
                    <input type={"image"} src={Illustration} className={'error'} alt={'error 404'}/>
                    <p className={'error__text'}>Страница,на которую вы попали, не существует</p>
                    <button className={'error__button'}><a href={'/main'}>На главную</a></button>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default Error404;