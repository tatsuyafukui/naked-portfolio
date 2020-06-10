import React from "react";
import PropTypes from "prop-types";
import { containPresenter } from "../../utils/HoC";

const OverwrapPresenter = ({ children }) => <>{children}</>;

export const OverwrapContainer = ({ maxChars, textOverflow, open, children, presenter }) => {
  if (!open && typeof children === "string" && maxChars >= 0 && children.length > maxChars) {
    children = React.Children.toArray(children.slice(0, maxChars));
    children.push(textOverflow);
  }

  return presenter({ children });
};

const Overwrap = containPresenter(OverwrapContainer, OverwrapPresenter);

Overwrap.propTypes = {
  children: PropTypes.element.isRequired,
  maxChars: PropTypes.number,
  open: PropTypes.bool,
};

Overwrap.defaultProps = {
  maxChars: 50,
  textOverflow: "...",
  open: false,
};

export default Overwrap;
