import React from 'react';
import { FontSize, TagType } from '../constants';

export interface ITxt extends React.HTMLAttributes<HTMLElement> {
  fontSize?: FontSize;
  tag?: TagType;
}
//IntrinsicAttribute
