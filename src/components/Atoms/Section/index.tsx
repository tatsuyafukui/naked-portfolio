import React from 'react';
import style from './style.css';

const Section: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return <section className={`${style.root}`}>{props.children}</section>;
};

export default Section;
