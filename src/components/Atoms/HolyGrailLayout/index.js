import React from "react";
import styles from "./styles.module.scss";
import { containPresenter } from "../../utils/HoC";

const HolyGrailLayoutPresenter = ({ tag: Tag = "div", parts, className }) => {
  const { top, right, main, bottom, left } = parts;
  return (
    <Tag className={[styles.root, className].join(" ")}>
      {top}
      <div className={styles.body}>
        {main}
        {left}
        {right}
      </div>
      {bottom}
    </Tag>
  );
};

const HolyGrailLayoutContainer = ({ presenter, children, ...props }) => {
  const parts = mapParts(children);
  return presenter({ parts, ...props });
};

const partTypes = ["HolyGrailTop", "HolyGrailRight", "HolyGrailMain", "HolyGrailBottom", "HolyGrailLeft"];

const mapParts = elems => {
  const parts = [];
  elems.map(elem => {
    const idx = elem.type.displayName ? partTypes.indexOf(elem.type.displayName) : partTypes.indexOf(elem.type.name);
    if (!~idx) return;
    parts[idx] = elem.props.children;
  });
  const [top, right, main, bottom, left] = parts;
  return { top, right, main, bottom, left };
};

const HolyGrailLayout = containPresenter(HolyGrailLayoutContainer, HolyGrailLayoutPresenter);

export default HolyGrailLayout;

export const HolyGrailTop = () => <div>これはレンダリングされない</div>;
export const HolyGrailRight = () => <div>これはレンダリングされない</div>;
export const HolyGrailMain = () => <div>これはレンダリングされない</div>;
export const HolyGrailBottom = () => <div>これはレンダリングされない</div>;
export const HolyGrailLeft = () => <div>これはレンダリングされない</div>;
