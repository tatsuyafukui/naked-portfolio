import React from 'react'
import styles from './styles.module.scss'
import Heading from '../../Atoms/Heading'
import Image from '../../../images/icon.png'

const Error404 = () => (
  <div className={styles.root}>
    404 Not found
    <Heading>aaaaa</Heading>
    <img src={Image} />
  </div>
)

export default Error404
