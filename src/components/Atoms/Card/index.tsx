import React, {HTMLAttributes} from 'react';
import style from './style.css';

const Card: React.FC<HTMLAttributes<HTMLElement>> = ({className, ...props}) => {
		return (
				<div  {...props} className={[style.root, className].join(' ')}>
						{props.children}
				</div>
		);
};

export default Card;
