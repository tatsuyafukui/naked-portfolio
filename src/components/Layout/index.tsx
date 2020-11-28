import React from 'react';
import Header from '../Organisms/Header';
import './layout.module.scss';
import style from './layout.module.scss';

import Footer from '../Organisms/Footer';
import ThemeContext from '../../context/ThemeContext';
import {Link} from "gatsby";

const Index: React.FC = ({ children }: any) => {
  return (
    <>
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? style.dark : style.light}>
            <ThemeContext.Consumer>
              {theme => (
                <div
                  style={{
                    background: `rebeccapurple`,
                    marginBottom: `1.45rem`,
                  }}
                >
                  <div
                    style={{
                      margin: `0 auto`,
                      maxWidth: 960,
                      padding: `1.45rem 1.0875rem`,
                    }}
                  >
                    <h1 style={{ margin: 0 }}>
                      <Link
                        to="/"
                        style={{
                          color: `white`,
                          textDecoration: `none`,
                        }}
                      >
                        aaaaaaaaaaaaaaaaaaa
                      </Link>
                    </h1>
                    <button className="dark-switcher" onClick={theme.toggleDark}>
                      {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
                    </button>
                  </div>
                </div>
              )}
            </ThemeContext.Consumer>
            <div>
              <main>{children}</main>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
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
