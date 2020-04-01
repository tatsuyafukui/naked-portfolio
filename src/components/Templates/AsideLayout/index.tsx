import React, { ReactNode } from 'react';

import Header from '../../Organisms/Header';
import '../Layout/layout.css';
import style from './style.css';
import Footer from '../../Organisms/Footer';

interface IProps {
  aside: ReactNode;
}
const AsideLayout: React.FC<IProps> = ({ children, aside }) => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <aside className={style.aside}>{aside}</aside>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AsideLayout;
