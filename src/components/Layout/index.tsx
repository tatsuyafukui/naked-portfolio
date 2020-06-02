import React from 'react';
import Header from '../Organisms/Header';
import './layout.module.scss';
import Footer from '../Organisms/Footer';

const Index: React.FC = ({ children }: any) => {
  return (
    <>
      <Header/>
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  );
};

export const SceneLayout: React.FC = ({ children }: any) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Index;
