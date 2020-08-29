import React from 'react';
import s from './Header.module.css';
import AuthContainer from '../Auth/AuthContainer';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <img className={s.logo} src="https://www.freepnglogos.com/uploads/eagles-png-logo/eagle-sports-png-logos--0.png" alt="" />
        <AuthContainer />
      </div>


    </header>
  )
}

export default Header