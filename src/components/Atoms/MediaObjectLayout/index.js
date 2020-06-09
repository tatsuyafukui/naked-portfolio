import React from "react";
import styles from "./styles.module.scss";

const MediaObjectLayout = ({ tag: Tag, summary, children, className }) => {
  return (
    <Tag className={[styles.root, styles[summary], className].join(" ")}>
      <div>{children[0]}</div>
      <div className={styles.body}>{children.slice(1)}</div>
    </Tag>
  );
};

MediaObjectLayout.defaultProps = {
  tag: "div",
  summary: "left",
};

export default MediaObjectLayout;
