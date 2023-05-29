import React from 'react';
import styles from './Navbar.module.css';
import ToDarkTheme from "../../icons/to-dark-theme.png";
import Logo from "../../icons/logo.png";
import {Link} from 'react-router-dom';

const Navbar = ({logo, page}) => {
    return (
        <div className={styles.navbar}>
            <input type={'image'} src={ToDarkTheme} className={styles.navbar__theme} alt={''}/>
            {logo && <input type={'image'} src={Logo} className={styles.navbar__logo} alt={''}/>}
            <div className={styles.navbar__links}>
                <Link to={'/about'} className={page === 'about' ? styles.active : undefined}>О приложении</Link>
                <Link to={'/'} className={page === 'main' ? styles.active : undefined}>Главная</Link>
            </div>
        </div>
    );
};

export default Navbar;