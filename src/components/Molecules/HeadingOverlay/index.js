import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { containPresenter } from "../../utils/HoC";

const HeadingOverlayPresenter = ({ children, className, ...props }) => (
		<div className={[styles.root, className].join(" ")} {...props}>
				{children}
		</div>
);

const HeadingOverlayContainer = ({
			presenter,
			children,
			...props
	}) => {
		children = React.Children.map(children, child => {
				if (typeof child === "string") return null;

				if (child.type.name === "Back") {
						const grandChild = React.Children.only(child.props.children);

						return React.cloneElement(grandChild, {
								className: [styles.back].join(' '),
						});
				}

				if (child.type.name === "Front") {
						const grandChild = child.props.children;
						return (
								<div className={styles.overlay}>
										{grandChild}
								</div>
						);
				}

				return child;
		});

		return presenter({ children, ...props });
};

const HeadingOverlay = containPresenter(
		HeadingOverlayContainer,
		HeadingOverlayPresenter
);

HeadingOverlay.propTypes = {
		heading: PropTypes.string,
};

export default HeadingOverlay;

export const Back = () => (
		<span>これはレンダリングされないもの</span>
);

export const Front = () => (
		<span>これはレンダリングされないもの</span>
);
