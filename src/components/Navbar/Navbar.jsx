import React from 'react';
import styles from './Navbar.module.css';
import ToDarkTheme from "../../icons/to-dark-theme.png";
import Logo from "../../icons/logo.png";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <input type={'image'} src={ToDarkTheme} alt={''}/>
            <input type={'image'} src={Logo} alt={''}/>
            <div className={styles.navbar__links}>
                <Link to={'/about'}>О приложении</Link>
                <Link to={'/main'}>Главная</Link>
                <Link to={'/forecast'}>Прогноз</Link>
            </div>
        </div>
    );
};

export default Navbar;