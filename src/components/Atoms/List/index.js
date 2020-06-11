import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { containPresenter } from "../../utils/HoC";

const listFactory = role => ({ tag: Tag, children, className, ...props }) => (
  <Tag className={[styles[`${Tag}`], styles[role], className].join(" ")} {...props} >
    {children}
  </Tag>
);

const ListPresenter = listFactory("base");
const ListBorderedPresenter = listFactory("bordered");

const ListContainer = ({ elementType, presenter, ...props }) => {
  const tag = elementType;
  return presenter({ tag, ...props });
};

const List = containPresenter(ListContainer, ListPresenter);
export const ListBordered = containPresenter(ListContainer, ListBorderedPresenter);

List.propTypes = {
  children: PropTypes.node.isRequired,
  elementType: PropTypes.string,
};

List.defaultProps = {
  elementType: 'ul',
};

ListBordered.propTypes = {
  children: PropTypes.node.isRequired,
  elementType: PropTypes.string,
};

ListBordered.defaultProps = {
  elementType: 'ul',
};

export default List;
