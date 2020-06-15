import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import Logo from '../../Atoms/Logo'
import Container from '../../Atoms/Container'

const Header = className => (
  <header className={[styles.header, className].join(' ')}>
    <Container>
      <Link to='/'>
        <Logo className={styles.logo} />
      </Link>
    </Container>
  </header>
)

export default Header

Container.propTypes = {
  className: PropTypes.string,
}
