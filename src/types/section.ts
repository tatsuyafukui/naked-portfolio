import React from 'react';
import { ImageName } from '../constants';

export interface ISection extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  content: string;
  image?: ImageName;
}
