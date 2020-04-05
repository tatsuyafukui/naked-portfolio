import React from 'react';
import { About, ImageName } from '../constants';

export interface ISection extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  content: string;
  image?: About;
  link?: string;
}
