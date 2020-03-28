import React from 'react';
import style from './style.css';
import { Level } from '../../../constants';
import { IHeading } from '../../../types/heading';

const Heading: React.FC<IHeading> = props => {
  return (
    <HeadingContainer
      presenter={(presenterProps: IHeading) => (
        <HeadingPresenter {...presenterProps} />
      )}
      {...props}
    />
  );
};

Heading.defaultProps = {
  level: Level.h2,
  visualLevel: Level.h2,
};

export default Heading;

const HeadingPresenter: React.FC<IHeading> = ({
  level: Tag,
  visualLevel,
  ...props
}) => (
  <Tag
    className={[style.h, style[visualLevel], props.className].join(' ')}
    {...props}
  />
);

const HeadingContainer: React.FC<IHeading> = ({
  visualLevel,
  level,
  presenter,
  ...props
}) => {
  return presenter({ level, visualLevel, ...props });
};