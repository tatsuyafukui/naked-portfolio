import React from 'react';
import style from './style.module.scss';
import { containPresenter } from '../../utils/HoC';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  tag?: 'div' | 'section';
  parts: {
    top: React.ReactNode;
    right: React.ReactNode;
    main: React.ReactNode;
    bottom: React.ReactNode;
    left: React.ReactNode;
  };
}

const HolyGrailLayoutPresenter: React.FC<IProps> = ({
  tag: Tag = 'div',
  parts,
  className,
  ...props
}) => {
  const { top, right, main, bottom, left } = parts;
  return (
    <Tag className={[style.root, className].join(' ')}>
      {top}
      <div className={style.body}>
        {main}
        {left}
        {right}
      </div>
      {bottom}
    </Tag>
  );
};

interface IPropsContainer extends IProps {
  presenter: (presenterProps: IProps) => JSX.Element;
}

const HolyGrailLayoutContainer: React.FC<IPropsContainer> = ({
  presenter,
  children,
  ...props
}) => {
  const parts = mapParts(children);
  return presenter({ parts, ...props });
};

const partTypes = [
  'HolyGrailTop',
  'HolyGrailRight',
  'HolyGrailMain',
  'HolyGrailBottom',
  'HolyGrailLeft',
];

const mapParts = (elems: any) => {
  const parts: React.ReactNode[] = [];
  elems.map((elem: any) => {
    const idx = elem.type.displayName
      ? partTypes.indexOf(elem.type.displayName)
      : partTypes.indexOf(elem.type.name);
    if (!~idx) return;
    parts[idx] = elem.props.children;
  });
  const [top, right, main, bottom, left] = parts;
  return { top, right, main, bottom, left };
};

const HolyGrailLayout = containPresenter(
  HolyGrailLayoutContainer,
  HolyGrailLayoutPresenter
);

export default HolyGrailLayout;

export const HolyGrailTop: React.FC = ({ children }) => (
  <div>これはレンダリングされない</div>
);
export const HolyGrailRight: React.FC = ({ children }) => (
  <div>これはレンダリングされない</div>
);
export const HolyGrailMain: React.FC = ({ children }) => (
  <div>これはレンダリングされない</div>
);
export const HolyGrailBottom: React.FC = ({ children }) => (
  <div>これはレンダリングされない</div>
);
export const HolyGrailLeft: React.FC = ({ children }) => (
  <div>これはレンダリングされない</div>
);
