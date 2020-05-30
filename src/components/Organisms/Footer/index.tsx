import React from 'react';
import style from './style.module.scss';
import Logo from '../../Atoms/Logo';
import { LogoName, Locale } from '../../../constants';
import Txt from '../../Atoms/Txt';
import { useTranslation } from 'react-i18next';
import { containPresenter } from '../../utils/HoC';
import { TFunction } from 'i18next';

type Menu = {
  content: string;
  link: string;
}[];

type LangMenu = {
  content: string;
  onClick: () => void;
}[];

interface IProps {
  menu: Menu;
  langList: LangMenu;
}

const FooterPresenter: React.FC<IProps> = ({ menu, langList }) => (
  <footer className={style.root}>
    <div className={style.container}>
      <div>
        <div>
          <Logo logoName={LogoName.journeyLogo} />
        </div>
        <div>
          <ul className={style.menuContainer}>
            {menu.map(list => (
              <li key={list.content}>
                <a href={list.link} target={'_blank'}>
                  <Txt>{list.content}</Txt>
                </a>
              </li>
            ))}
            {/* TODO: language はOrganusmsで専用コンポーネントを作る */}
            {langList.map(list => (
              <li key={list.content}>
                <button onClick={list.onClick}>{list.content}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

interface ContainerProps {
  locale: Locale;
  presenter: (presenter: IProps) => JSX.Element;
}

const FooterContainer: React.FC<ContainerProps> = ({ locale, presenter }) => {
  const [t, i18n] = useTranslation();

  {
    /* TODO: language はOrganusmsで専用コンポーネントを作る */
  }
  const langList = [
    {
      content: t('Footer.Japanese'),
      onClick: () => i18n.changeLanguage('ja'),
    },
    {
      content: t('Footer.English'),
      onClick: () => {
        i18n.changeLanguage('en');
      },
    },
  ];

  let menu = getFooterMenuForLocale(locale, t);
  return presenter({ menu, langList });
};

const Footer: React.FC<{ locale?: Locale }> = containPresenter(
  FooterContainer,
  FooterPresenter
);

Footer.defaultProps = {
  locale: Locale.ja,
};

export default Footer;

const getFooterMenuForLocale = (locale: Locale, t: TFunction): Menu => {
  let menu;
  switch (locale) {
    case 'ja':
      menu = [
        {
          content: t('Footer.Operating company'),
          link: 'https://prog-8.com/about',
        },
        {
          content: t('Footer.Terms'),
          link: 'https://prog-8.com/policy',
        },
        {
          content: t('Footer.Privacy Policy'),
          link: 'https://prog-8.com/privacy_policy',
        },
        {
          content: 'Twitter',
          link: 'https://twitter.com/progateJP',
        },
        {
          content: 'Facebook',
          link: 'https://www.facebook.com/ProgateOfficial',
        },
      ];
      break;
    case 'en':
      menu = [
        {
          content: t('Footer.Operating company'),
          link: 'https://progate.com/about',
        },
        { content: t('Footer.Terms'), link: 'https://progate.com/policy' },
        {
          content: t('Footer.Privacy Policy'),
          link: 'https://progate.com/privacy_policy',
        },
        { content: 'Twitter', link: 'https://twitter.com/progateEN' },
        {
          content: 'Facebook',
          link: 'https://www.facebook.com/ProgateOfficial/',
        },
      ];
      break;
  }

  return menu;
};
