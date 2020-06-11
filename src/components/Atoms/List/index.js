import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { containPresenter } from "../../utils/HoC";

const ListPresenter = ({ tag: Tag, children, className, ...props }) => (
  <Tag className={[className].join(" ")} {...props} >
    {children}
  </Tag>
);

export const ListContainer = ({ elementType, presenter, ...props }) => {
  const tag = elementType;
  return presenter({ tag, ...props });
};

const List = containPresenter(ListContainer, ListPresenter);

List.propTypes = {
  children: PropTypes.node.isRequired,
  elementType: PropTypes.string,
};

List.defaultProps = {
  elementType: 'ul',
};

export default List;
