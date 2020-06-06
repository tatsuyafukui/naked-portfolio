import React from "react";
import styles from "./styles.module.scss";

const MediaObjectLayout = ({ children, className, tag: Tag }) => {
  return (
    <Tag className={[styles.root, className].join(" ")}>
      <div>{children[0]}</div>
      <div className={styles.body}>{children.slice(1)}</div>
    </Tag>
  );
};

MediaObjectLayout.defaultProps = {
  tag: "div",
};
export default MediaObjectLayout;
