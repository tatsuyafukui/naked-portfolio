import React from 'react';
import { FontSize, Tag } from '../constants';

export interface ITxt extends React.AllHTMLAttributes<HTMLElement> {
  fontSize?: FontSize;
  tag?: Tag;
}
