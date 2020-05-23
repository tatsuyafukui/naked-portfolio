import React from 'react';
import style from './style.module.scss';
import Logo from '../../Atoms/Logo';
import { LogoName } from '../../../constants';
import Txt from "../../Atoms/Txt";

const Footer = () => (
  <footer className={style.root}>
    <div className={style.container}>

      <div>
        <div>
          <Logo logoName={LogoName.journeyLogo} />
        </div>
        <div>
          <ul className={style.menuContainer}>
            <li><Txt>運営会社</Txt></li>
            <li><Txt>利用規約</Txt></li>
            <li><Txt>プライバシーポリシー</Txt></li>
            <li><Txt>Twitter</Txt></li>
            <li><Txt>facebook</Txt></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
