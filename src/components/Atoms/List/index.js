import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { containPresenter } from "../../utils/HoC";

// ListItem
const listItemFactory = role => ({ children, className, ...props }) => (
  <li {...props} className={[styles.li, styles[role], className].join(" ")}>
    {children}
  </li>
);

export const ListItem = listItemFactory("base");
export const ListItemBordered = listItemFactory("underlined");


// List
const listFactory = role => ({ tag: Tag, children, className, ...props }) => (
  <Tag className={[styles[`${Tag}`], styles[role], className].join(" ")} {...props} >
    {children}
  </Tag>
);

const List = listFactory("base");
export const ListBordered = listFactory("bordered");

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

ListItemBordered.propTypes = {
  children: PropTypes.node.isRequired,
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
};

List.defaultProps = {
  tag: 'ul',
};

ListBordered.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
};

ListBordered.defaultProps = {
  tag: 'ul',
};

export default List;
