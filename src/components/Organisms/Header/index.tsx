import { Link } from 'gatsby';
import React from 'react';
import style from './style.module.scss';
import Logo from '../../Atoms/Logo';
import { LogoName } from '../../../constants';

const Header: React.FC = () => (
  <header className={style.header}>
    <Link to="/">
      <div>
        <Logo logoName={LogoName.journeyLogo} />
      </div>
    </Link>
  </header>
);

export default Header;
