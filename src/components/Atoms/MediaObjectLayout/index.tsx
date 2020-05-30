import React, { ReactElement } from 'react';
import style from './style.module.scss';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  tag?: 'section' | 'div';
  children: ReactElement[];
}

const MediaObjectLayout: React.FC<IProps> = ({
  children,
  className,
  tag: Tag = 'div',
}) => {
  return (
    <Tag className={[style.container, className].join(' ')}>
      <div>{children[0]}</div>
      <div className={style.body}>{children.slice(1)}</div>
    </Tag>
  );
};

export default MediaObjectLayout;
