import React from 'react';
import style from './style.module.scss';
import { ButtonType } from '../../../constants';

export const buttonFactory = (
  type: ButtonType
): React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> => ({
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={[style.btn, style[type], className].join(' ')}
    />
  );
};
const Button = buttonFactory(ButtonType.base);
export const PrimaryButton = buttonFactory(ButtonType.primary);
export const SecondaryButton = buttonFactory(ButtonType.secondary);
export const WarningButton = buttonFactory(ButtonType.warning);
export const DangerButton = buttonFactory(ButtonType.danger);

export default Button;
