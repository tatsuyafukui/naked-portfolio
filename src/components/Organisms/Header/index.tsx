import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style.css';
import Logo from '../../Atoms/Logo';

const Header = () => (
  <header className={style.header}>
    <Link to="/">
      <div className={style.headerLogoContainer}>
        <Logo />
      </div>
    </Link>
    <ul className={style.headerMenuContainer}>
      <li className={style.headerMenu}>
        <Link to={'/'}>ログイン</Link>
      </li>
      <li className={style.headerMenu}>
        <Link to={'/'}>登録</Link>
      </li>
      <li className={style.headerMenu}>
        <Link to={'/'}>使い方</Link>
      </li>
      <li className={style.headerMenu}>
        <Link to={'/'}>目標確認</Link>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
