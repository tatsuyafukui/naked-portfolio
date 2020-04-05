import React, {ElementType} from "react";
import {containPresenter} from "../../utils/HoC";
import style from './style.module.scss';
import {ElevationLevel} from "../../../constants";

interface IProps extends React.HTMLAttributes<HTMLElement>{
		elevation?: ElevationLevel;
		variant?: 'elevation' | 'outlined';
		square?: boolean;
		tag?: ElementType;
}

const PaperPresenter: React.FC<IProps> = ({tag: Tag, className, ...props}) => (
		<Tag
				className={className}
				{...props}
		/>
);



interface IPropsContainer extends IProps {
		presenter: (presenterProps: IProps) => JSX.Element
}

export const PaperContainer: React.FC<IPropsContainer> = ({presenter, elevation, variant, square, className, ...props}) => {

		if(variant === 'outlined') {
				className = [className, style.outlined].join(' ');
		} else {
				className = [className, style[elevation]].join(' ');
		}

		if(!square) className += ` ${style.rounded}`;

		return presenter({className, ...props})
};



const Paper: React.FC<IProps> = containPresenter(PaperContainer, PaperPresenter);
Paper.defaultProps = {
		elevation: ElevationLevel.one,
		tag: 'div',
		variant: 'elevation',
		square: false,
};

export default Paper;
