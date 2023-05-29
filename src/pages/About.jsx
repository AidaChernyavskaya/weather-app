import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import {ThemeContext} from "../contexts/ThemeContext";

const About = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className={theme === 'dark' ? 'dark' : undefined}>
                    <Navbar logo={true}/>
                    <p className={'about'}>
                      Данное приложение позволяет узнать прогноз погоды на один, два или три дня. Прогноз отображается для введенного места - это может быть город или местность.
                      <br/><br/> Для определения координат введенного местоположения используется <b>Geocoding API</b>, а для отображения погоды по координатам <b>Weather API</b> - OpenWeatherMap. Приложение написано на <b>React</b> в учебных целях.
                      <br/><br/>Телеграм для связи:
                      <a href={'https://t.me/AidaChernyavskaya'}> @AidaChernyavskaya</a>
                    </p>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default About;