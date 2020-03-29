import React from 'react';
import style from './style.css';
import { Role, FontSize, TagType } from '../../../constants';
import { ITxt } from '../../../types/txt';

const txtFactory = (role: Role): React.FC<ITxt> => ({
  tag: Tag = TagType.p,
  fontSize = FontSize.m,
  className,
  ...props
}) => {
  return (
    <Tag
      {...props}
      className={[style[role], style[fontSize], className].join(' ')}
    />
  );
};

const Txt = txtFactory(Role.base);
export const WhiteTxt = txtFactory(Role.white);
export const InfoTxt = txtFactory(Role.info);
export const SuccessTxt = txtFactory(Role.success);
export const WarningTxt = txtFactory(Role.warning);
export const DangerTxt = txtFactory(Role.danger);
export const PrimaryTxt = txtFactory(Role.primary);

export default Txt;
