import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import Logo from '../../Atoms/Logo'
import Container from '../../Atoms/Container'
import List, {ListItem} from '../../Atoms/List'
import {DisableTxt} from '../../Atoms/Txt'

const FooterList = () => {
  const links = [
    {
      'label': 'Progate',
      'url': 'https://prog-8.com/'
    },
    {
      'label': '運営会社',
      'url': 'https://prog-8.com/about'
    },
    {
      'label': '利用規約',
      'url': 'https://prog-8.com/policy'
    },
    {
      'label': 'プライバシーポリシー',
      'url': 'https://prog-8.com/privacy_policy'
    },
    {
      'label': 'Twitter',
      'url': 'https://twitter.com/progateJP'
    },
    {
      'label': 'Facebook',
      'url': 'https://www.facebook.com/ProgateOfficial/'
    }
  ]

  return (
    <List>
      {
        links.map((link) => (
          <ListItem className={styles.item} key={link.label}>
            <Link
              to={link.url}
              target='_blank'
              rel="noopener noreferrer"
              className={styles.link}
            >
              {link.label}
            </Link>
          </ListItem>
        ))
      }
    </List>
  )
}

const Footer = className => (
  <footer className={[styles.footer, className].join(' ')}>
    <Container>
      <Link to='/'>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.inner}>
        <FooterList />
        <DisableTxt
          fontSize='xxs'
          className={styles.copyright}
        >
          © 2020 Progate, Inc.
        </DisableTxt>
      </div>
    </Container>
  </footer>
)

export default Footer

Container.propTypes = {
  className: PropTypes.string,
}
