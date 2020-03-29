import React from 'react';
import { ImageName } from '../constants';

export interface IList extends React.HTMLAttributes<HTMLElement> {
  image?: ImageName;
  heading: string;
  content: string;
  link?: string;
}
