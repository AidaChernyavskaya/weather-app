import React from 'react';
import styles from './Navbar.module.css';
import ToDarkTheme from "../../icons/to-dark-theme.png";
import Logo from "../../icons/logo.png";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <input type={'image'} src={ToDarkTheme} className={styles.navbar__theme} alt={''}/>
            <input type={'image'} src={Logo} className={styles.navbar__logo} alt={''}/>
            <div className={styles.navbar__links}>
                <Link to={'/about'}>О приложении</Link>
                <Link to={'/'}>Главная</Link>
            </div>
        </div>
    );
};

export default Navbar;