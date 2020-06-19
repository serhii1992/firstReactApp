import React from 'react';
import s from './Header.module.css';
import AuthContainer from '../Auth/AuthContainer';

const Header = () => {
    return(
        <header className={s.header}>
          <img src="https://www.freepnglogos.com/uploads/eagles-png-logo/eagle-sports-png-logos--0.png" alt= "" />
          <AuthContainer/>
        </header>
    )
}

export default Header