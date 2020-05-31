import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style.module.scss';
import Logo from '../../Atoms/Logo';
import { LogoName, Locale } from '../../../constants';
import Txt from '../../Atoms/Txt';
import { useTranslation } from 'react-i18next';
import { containPresenter } from '../../utils/HoC';

// const Header: React.FC<any> = ({locale}) => (
//   <header className={style.header}>
//     {/*TODO: locale URL 判定*/}
//     <Link to="/">
//       <div>
//         <Logo logoName={LogoName.journeyLogo} />
//       </div>
//     </Link>
//   </header>
// );

interface IProps {
  rootPath: string;
}

const HeaderPresenter: React.FC<IProps> = ({ rootPath }) => (
  <header className={style.header}>
    {/*TODO: locale URL 判定*/}
    <Link to={rootPath}>
      <div>
        <Logo logoName={LogoName.journeyLogo} />
      </div>
    </Link>
  </header>
);

interface ContainerProps {
  locale: Locale;
  presenter: (presenter: IProps) => JSX.Element;
}

const HeaderContainer: React.FC<ContainerProps> = ({ locale, presenter }) => {
  const rootPath = getRootPathForLocale(locale);
  return presenter({ rootPath });
};

const Header: React.FC<{ locale?: Locale }> = containPresenter(
  HeaderContainer,
  HeaderPresenter
);

Header.defaultProps = {
  locale: Locale.ja,
};

export default Header;

const getRootPathForLocale = (locale: Locale): string => {
  let rootPath = '/';
  switch (locale) {
    case 'ja':
      rootPath = '/';
      break;
    case 'en':
      rootPath = '/en';
      break;
  }

  return rootPath;
};
