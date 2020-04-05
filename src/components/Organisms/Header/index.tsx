import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style.module.scss';
import Logo from '../../Atoms/Logo';
import { LogoName } from '../../../constants';

const Header = () => (
  <header className={style.header}>
    <Link to="/">
      <div>
        <Logo logoName={LogoName.headerLogo} />
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
        <Link to={'/about'}>使い方</Link>
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
