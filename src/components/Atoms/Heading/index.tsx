import React from 'react';
import style from './style.module.scss';
import { Level } from '../../../constants';
import { IHeading } from '../../../types/heading';
import { containPresenter } from '../../utils/HoC';

const HeadingPresenter: React.FC<IHeading> = ({
  level: Tag,
  visualLevel,
  className,
  ...props
}) => (
  <Tag
    className={[style.h, style[visualLevel], className].join(' ')}
    {...props}
  />
);

const HeadingContainer: React.FC<IHeading> = ({
  visualLevel,
  level,
  presenter,
  ...props
}) => {
  visualLevel = visualLevel || level;
  return presenter({ level, visualLevel, ...props });
};

const Heading: React.FC<IHeading> = containPresenter(
  HeadingContainer,
  HeadingPresenter
);
Heading.defaultProps = {
  level: Level.h2,
};

export default Heading;
