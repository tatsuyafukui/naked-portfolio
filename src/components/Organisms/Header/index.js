import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import Logo from '../../Atoms/Logo'
import Container from '../../Atoms/Container'

const Header = ({className, ...props}) => (
  <header className={[styles.header, className].join(' ')} {...props}>
    <Container>
      <Link to='/scenes'>
        <Logo className={styles.logo} />
      </Link>
    </Container>
  </header>
)

export default Header

Header.propTypes = {
  className: PropTypes.string,
}

Container.propTypes = {
  className: PropTypes.string,
}
