import React from 'react';
import Header from '../Organisms/Header';
import './layout.module.scss';
import '../../locales/i18n';
import Footer from '../Organisms/Footer';
import { Locale } from '../../constants';

interface IProps {
  locale?: Locale;
}

const Index: React.FC<IProps> = ({ children, locale }: any) => {
  return (
    <>
      <Header locale={locale} />
      <div>
        <main>{children}</main>
      </div>
      <Footer locale={locale} />
    </>
  );
};

export const SceneLayout: React.FC<IProps> = ({ children, locale }: any) => {
  return (
    <>
      <Header locale={locale} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer locale={locale} />
    </>
  );
};

export default Index;
