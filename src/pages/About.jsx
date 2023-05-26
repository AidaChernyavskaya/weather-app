import React from 'react';

const About = () => {
    return (
        <p className={'about'}>
            Данное приложение позволяет узнать прогноз погоды на один, два или три дня. Прогноз отображается для введенного места - это может быть город или местность.
            <br/><br/> Для определения координат введенного местоположения используется <b>Geocoding API</b>, а для отображения погоды по координатам <b>Weather API</b> - OpenWeatherMap. Приложение написано на <b>React</b> в учебных целях.
            <br/><br/>Телеграм для связи:
            <a href={'https://t.me/AidaChernyavskaya'}> @AidaChernyavskaya</a>
        </p>
    );
};

export default About;