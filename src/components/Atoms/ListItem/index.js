import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const listItemFactory = role => ({ children, className, ...props }) => (
  <li {...props} className={[styles.li, styles[role], className].join(" ")}>
    {children}
  </li>
);

const ListItem = listItemFactory("base");
export const ListItemBordered = listItemFactory("underlined");

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

ListItemBordered.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
