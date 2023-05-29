import React from 'react';
import Illustration from "../icons/404.png";

const Error404 = () => {
    return (
        <div>
            <input type={"image"} src={Illustration} className={'error'} alt={'error 404'}/>
            <p className={'error__text'}>Страница,на которую вы попали, не существует</p>
            <button className={'error__button'}><a href={'/'}>На главную</a></button>
        </div>
    );
};

export default Error404;