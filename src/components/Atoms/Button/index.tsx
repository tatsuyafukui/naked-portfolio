import React from 'react';
import style from './style.css';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return <button className={[style.root, className].join(' ')} {...props} />;
};

export default Button;
