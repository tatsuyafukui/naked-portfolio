import { Link } from "gatsby"
import React from "react"
import styles from "./styles.module.scss"
import logo from "../../../images/logo/horizontal.svg"
const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img src={logo} alt={"journey-logo"} />
    </Link>
  </header>
)

export default Header
