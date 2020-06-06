import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const txtFactory = role => ({ tag: Tag, fontSize, className, ...props }) => (
  <Tag {...props} className={[styles[role], styles[fontSize], className].join(" ")} />
);

const Txt = txtFactory("base");

Txt.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  fontSize: PropTypes.string,
};

Txt.defaultProps = {
  tag: "p",
  fontSize: "m",
};

export default Txt;
