import React from 'react';
import style from './style.module.scss';
import { TxtRole, FontSize, TagType } from '../../../constants';
import { ITxt } from '../../../types/txt';

const txtFactory = (role: TxtRole): React.FC<ITxt> => ({
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

const Txt = txtFactory(TxtRole.base);
export const WhiteTxt = txtFactory(TxtRole.white);
export const InfoTxt = txtFactory(TxtRole.info);
export const SuccessTxt = txtFactory(TxtRole.success);
export const WarningTxt = txtFactory(TxtRole.warning);
export const DangerTxt = txtFactory(TxtRole.danger);
export const PrimaryTxt = txtFactory(TxtRole.primary);

export default Txt;
