import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Image';
import {ImageName} from '../../../constants';
import style from './style.css';
import {ICreativeSection} from '../../../types/creativeSection';
import Button from "../../Atoms/Button";
import {Link} from "gatsby";

const CreativeSection: React.FC<ICreativeSection> = props => {
		return (
				<section
						className={`${style.root}`}
				>
						<div className={style.imageBlock}>
								<Image imageName={ImageName.successImage} />
						</div>
						<div className={style.descriptionBlock}>
								<div>
										<Heading>{props.heading}</Heading>
										<Txt>
												{props.content}
										</Txt>
										<div className={style.buttonContainer}>
												<Link to={'/'}>
														<Button>みんなの成果物</Button>
												</Link>
												<Link to={'/'}>
														<Button>目標を設定する</Button>
												</Link>
										</div>
								</div>
						</div>

				</section>
		);
};

export default CreativeSection;
