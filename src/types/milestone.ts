import React from 'react';
import { Milestones } from '../constants';

export interface IMilestone extends React.HTMLAttributes<HTMLElement> {
  image: Milestones;
  heading: string;
  content: string;
  link: string;
}
