import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const listItemFactory = role => ({ children, className, ...props }) => (
  <li {...props} className={[styles.listItem, styles[role], className].join(" ")}>
    {children}
  </li>
);

const ListItem = listItemFactory("base");
export const ListItemUnderlined = listItemFactory("underlined");

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

ListItemUnderlined.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
