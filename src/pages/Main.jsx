import React from 'react';
import LogoBig from "../icons/logo-big.png";
import SearchField from "../components/SearchField/SearchField";
import CloudsBackground from "../icons/clouds-background.png";

const Main = () => {
    return (
        <div>
            <input type={'image'} src={LogoBig} alt={''} className={'logo'}/>
            <SearchField text={'Узнай погоду в своем городе...'}/>
            <input
                type={'image'}
                src={CloudsBackground}
                className={'clouds_background clouds_background__main'}
                alt={'Big logo'}
            />
        </div>
    );
};

export default Main;