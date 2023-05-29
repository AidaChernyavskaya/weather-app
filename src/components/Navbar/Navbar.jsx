import React from 'react';
import styles from './Navbar.module.css';
import ToDarkTheme from "../../icons/to-dark-theme.png";
import ToLightTheme from "../../icons/to-light-theme.png";
import Logo from "../../icons/logo.png";
import {Link} from 'react-router-dom';
import {ThemeContext, themes} from "../../contexts/ThemeContext";
import cn from "classnames";

const Navbar = ({logo, page}) => {
    return (
        <ThemeContext.Consumer>
            {({theme, setTheme}) => (
                <div className={cn(styles.navbar, theme === 'dark' ? styles.dark : undefined)}>
                    <input
                        type={'image'}
                        src={theme === 'dark' ? ToLightTheme : ToDarkTheme}
                        className={styles.navbar__theme}
                        alt={''}
                        onClick={() => {
                            if (theme === themes.light) setTheme(themes.dark)
                            if (theme === themes.dark) setTheme(themes.light)
                        }}
                    />
                    {logo && <a href={'/'} className={styles.navbar__logo}><input type={'image'} src={Logo} alt={''}/></a>}
                    <div className={styles.navbar__links}>
                        <Link to={'/about'}>О приложении</Link>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default Navbar;