import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style.module.scss';
import Logo from '../../Atoms/Logo';
import { LogoName } from '../../../constants';

const Header = () => (
  <header className={style.header}>
    {/*TODO: locale URL 判定*/}
    <Link to="/">
      <div>
        <Logo logoName={LogoName.journeyLogo} />
      </div>
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
