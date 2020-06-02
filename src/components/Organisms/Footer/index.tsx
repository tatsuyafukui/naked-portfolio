import React from 'react';
import style from './style.module.scss';
import Logo from '../../Atoms/Logo';
import { LogoName } from '../../../constants';
import Txt from '../../Atoms/Txt';

const Footer: React.FC = () => (
  <footer className={style.root}>
    <div className={style.container}>
      <div>
        <div>
          <Logo logoName={LogoName.journeyLogo} />
        </div>
        <div>
          <ul className={style.menuContainer}>
            <li>
              <a href={'https://prog-8.com/about'} rel="noopener noreferrer" target={'_blank'}>
                <Txt>運営会社</Txt>
              </a>
            </li>
            <li>
              <a href={'https://prog-8.com/policy'} rel="noopener noreferrer" target={'_blank'}>
                <Txt>利用規約</Txt>
              </a>
            </li>
            <li>
              <a href={'https://prog-8.com/privacy_policy'} rel="noopener noreferrer" target={'_blank'}>
                <Txt>プライバシーポリシー</Txt>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

