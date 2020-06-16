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
      'title': 'Progate',
      'url': 'https://prog-8.com/'
    },
    {
      'title': '運営会社',
      'url': 'https://prog-8.com/about'
    },
    {
      'title': '利用規約',
      'url': 'https://prog-8.com/policy'
    },
    {
      'title': 'プライバシーポリシー',
      'url': 'https://prog-8.com/privacy_policy'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/progateJP'
    },
    {
      'title': 'Facebook',
      'url': 'https://www.facebook.com/ProgateOfficial/'
    }
  ]

  const listItems = links.map((link) => (
    <ListItem className={styles.item} key={link.title}>
      <Link
        to={link.url}
        target='_blank'
        rel="noopener noreferrer"
        className={styles.link}
      >
        {link.title}
      </Link>
    </ListItem>
  ))

  return (
    <List>{listItems}</List>
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
