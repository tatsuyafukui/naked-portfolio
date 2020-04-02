import React from 'react';
import style from './style.css';
import {ButtonRole} from "../../../constants";

const buttonFactory = (role: ButtonRole): React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> => ({className, ...props}) => {
  return (
    <button
      {...props}
      className={[style.root, style[role], className].join(' ')}
    />
  );
};
const Button = buttonFactory(ButtonRole.primary);
export const PromaryButton = buttonFactory(ButtonRole.primary);
export const SecondaryButton = buttonFactory(ButtonRole.secondary);
export const WarningButton = buttonFactory(ButtonRole.warning);
export const DangerButton = buttonFactory(ButtonRole.danger);

export default Button;
