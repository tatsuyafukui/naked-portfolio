import React from 'react';
import { Level } from '../constants';
import { FontSize, TagType } from '../constants';

export interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  visualLevel?: Level;
  presenter?: (presenter: IHeading) => JSX.Element;
}

export interface ITxt extends React.HTMLAttributes<HTMLElement> {
  fontSize?: FontSize;
  tag?: TagType;
}

export interface IScene {
  id: string;
  heading?: string;
  description?: string;
  image: any;
  link?: string;
}
