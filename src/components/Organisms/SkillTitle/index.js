import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Txt from '../../Atoms/Txt'
import {BoldHeading} from '../../Atoms/Heading'
import LazyImage from '../../Atoms/LazyImage'
import {useStaticQuery, graphql} from 'gatsby'
import Container from '../../Atoms/Container'

const SkillTitle = ({skill, className, ...props}) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "index/kenIcon.svg"}) {
        publicURL
      }
    }
  `)

  return (
    <Container className={[styles.root, className].join(' ')} {...props}>
      <div className={styles.inner}>
        <LazyImage
          src={data.file.publicURL}
          alt={skill.title}
          className={styles.icon}
        />
        <div className={styles.textWrap}>
          <BoldHeading level={1} visualLevel={2} className={styles.title}>
            {skill.title}
          </BoldHeading>
          <Txt>{skill.subTitle}</Txt>
        </div>
      </div>
    </Container>
  )
}

export default SkillTitle

SkillTitle.propTypes = {
  skill: PropTypes.object,
  className: PropTypes.string,
}
