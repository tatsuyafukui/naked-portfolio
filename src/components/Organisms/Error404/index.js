import React from 'react'
import styles from './styles.module.scss'
import Heading from '../../Atoms/Heading'
import Button from '../../Atoms/Button'
import Link from '../../Atoms/Link'
import {LongTxt} from '../../Atoms/Txt'
import Cloudright from '../../../images/404/cloud_right.png'
import Cloudleft from '../../../images/404/cloud_left.png'
import Wavefront from '../../../images/404/wave_front.png'
import Waveback from '../../../images/404/wave_back.png'
import Ship from '../../../images/404/ship.png'
import Ballooning from '../../../images/404/ballooning.png'

const Error404 = () => (
  <div className={styles.root}>
    <div className={styles.notfound404}>
      <Heading className={styles.heading}>Page not found 404</Heading>
      <LongTxt className={styles.sabheading}>
        Oh, Looks likes you’re lost at sea. <br />
        Try going back to the previous page.
      </LongTxt>
      <Link to='/'>
        <Button className={styles.home}>GO TO HOME</Button>
      </Link>
    </div>
    <img className={styles.ballooning} src={Ballooning} />
    <img className={styles.cloudleft} src={Cloudleft} />
    <img className={styles.cloudright} src={Cloudright} />
    <img className={styles.wavefront} src={Wavefront} />
    <img className={styles.waveback} src={Waveback} />
    <img className={styles.ship} src={Ship} />
  </div>
)

export default Error404
