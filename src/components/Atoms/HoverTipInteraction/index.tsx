import React, { HTMLAttributes } from 'react';
import style from './style.module.scss';
import { containPresenter } from '../../utils/HoC';

const HoverTipInteractionPresenter: React.FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <span className={[style.root, className].join(' ')} {...props}>
    {children}
  </span>
);

const HoverTipInteractionContainer: React.FC<any> = ({
  presenter,
  children,
  className,
  ...props
}) => {
  children = React.Children.map(children, (child: any) => {
    if (typeof child === 'string') return child;

    if (child.type.displayName === 'Tip' || child.type.name === 'Tip') {
      const grandChild = React.Children.only(child.props.children);
      return React.cloneElement(grandChild, {
        className: [style.tip, grandChild.props.className].join(' '),
      });
    } else if (
      child.type.displayName === 'Marker' ||
      child.type.name === 'Marker'
    ) {
      const grandChild = child.props.children;
      return React.cloneElement(grandChild, {
        className: [style.marker, grandChild.props.className].join(' '),
      });
    }
    return child;
  });

  return presenter({ children, ...props });
};

const HoverTipInteraction: React.FC<HTMLAttributes<
  HTMLSpanElement
>> = containPresenter(
  HoverTipInteractionContainer,
  HoverTipInteractionPresenter
);

export default HoverTipInteraction;

export const Tip: React.FC = ({ children }) => (
  <span>これはレンダリングされないもの</span>
);
export const Marker: React.FC = ({ children }) => (
  <span>これはレンダリングされないもの</span>
);
