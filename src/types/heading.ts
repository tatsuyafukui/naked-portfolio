import React from 'react';
import { Level } from '../constants';

export interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  visualLevel?: Level;
  presenter?: (presenter: IHeading) => JSX.Element;
}
