import React from "react";
import styles from "./styles.module.scss";
import { containPresenter } from "../../utils/HoC";

const BreadcrumbPresenter = ({ tag: Tag, children, className }) => (
  <Tag className={[styles.root, className].join(" ")}>
    <ol className={styles.ol}>{children}</ol>
  </Tag>
);

/**
 * コンテナー
 * メニューに応じてリストを生成してpresenterを呼び出す
 */
export const BreadcrumbContainer = ({
  children,
  className,
  tag,
  separator,
  presenter,
}) => {

  const items = React.Children.toArray(children)
    .filter(child => React.isValidElement(child))
    .map((child, index) => <li key={`child-${index}`}>{child}</li>);

  return presenter({
    tag,
    children: insertSeparators(
      items,
      separator
    ),
    className,
  });
};

const Breadcrumb = containPresenter(BreadcrumbContainer, BreadcrumbPresenter);

Breadcrumb.defaultProps = {
  maxItems: 8,
  itemsAfterCollapse: 1,
  itemsBeforeCollapse: 1,
  separator: "/",
  tag: "nav",
};

export default Breadcrumb;

/**
 * ヘルパー関数
 * メニューの間にセパレイト文字をいれる
 * @param items
 * @param separator
 */
export const insertSeparators = (items, separator) => {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(
        current,
        <li aria-hidden key={`separator-${index}`} className={styles.separator}>
          {separator}
        </li>
      );
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
};
