import React from 'react';
import styles from './styles.module.scss';
import Txt from '../../Atoms/Txt';
import logo from "../../../images/logo/horizontal.svg";

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.container}>
      <div>
        <div>
          <img src={logo} alt={"journey-logo"} />
        </div>
        <div>
          <ul className={styles.menuContainer}>
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

