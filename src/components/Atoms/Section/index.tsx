import React from 'react';
import style from './style.css';
import { containPresenter } from '../../utils/HoC';

interface ISection extends React.HTMLAttributes<HTMLElement> {
  reverse?: boolean;
}

interface ISectionContainer extends ISection {
  presenter: (presenter: ISection) => JSX.Element;
}

const SectionPresenter: React.FC<ISection> = ({ className, ...props }) => {
  return <section className={`${style.root} ${className}`} {...props} />;
};

const InlineSectionPresenter: React.FC<ISection> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={`${style.root} ${style.inline} ${className}`}
      {...props}
    />
  );
};

const SectionContainer: React.FC<ISectionContainer> = ({
  reverse = false,
  presenter,
  ...props
}) => {
  if (reverse) props.className = [props.className, style['reverse']].join(' ');
  return presenter({ ...props });
};

const Section: React.FC<ISection> = containPresenter(
  SectionContainer,
  SectionPresenter
);

export default Section;
export const InlineSection: React.FC<ISection> = containPresenter(
  SectionContainer,
  InlineSectionPresenter
);
