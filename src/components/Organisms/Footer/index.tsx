import React from 'react';
import style from './style.css';
import Logo from '../../Atoms/Logo';
import { LogoName } from '../../../constants';

const Footer = () => (
  <footer className={style.root}>
    <div className={style.container}>
      <div className={style.logoBlock}>
        <Logo logoName={LogoName.inlineLogo} />
      </div>
      <div className={style.menuBlock}>
        <ul className={style.menuContainer}>
          <li>
            <strong>サービス</strong>
          </li>
          <li>progate</li>
          <li>progate</li>
          <li>progate</li>
        </ul>

        <ul className={style.menuContainer}>
          <li>
            <strong>サポート</strong>
          </li>
          <li>progate</li>
          <li>progate</li>
          <li>progate</li>
        </ul>

        <ul className={style.menuContainer}>
          <li>
            <strong>ビジネス</strong>
          </li>
          <li>progate</li>
          <li>progate</li>
          <li>progate</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
