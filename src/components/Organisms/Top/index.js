import React from 'react';
import Img from 'gatsby-image';
import styles from './styles.module.scss';
import Heading from "../../Atoms/Heading";
import Txt from "../../Atoms/Txt";

const Top = ({topImage}) => (
		<div className={styles.root}>
				<div className={styles.container}>
						<div className={styles.topSectionLeft}>
								<Heading level={1}>目標へ向かう学習を</Heading>
								<Txt>Journeyはあなたが自信をもって目標へ向かうための学習ロードマップです</Txt>
						</div>
						<div className={styles.topSectionRight}>
								<Img fixed={topImage} />
						</div>
				</div>
		</div>
)
export default Top;
