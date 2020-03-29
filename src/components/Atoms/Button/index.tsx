import React from 'react';
import style from './style.css';

const Button: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = props => {
  return (
    <button {...props} className={[style.root, props.className].join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;
