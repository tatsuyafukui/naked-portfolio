import React, { useState } from "react";
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
 * @param items
 * @param separator
 */
export const BreadcrumbContainer = ({
  children,
  className,
  tag,
  itemsAfterCollapse,
  itemsBeforeCollapse,
  maxItems,
  separator,
  presenter,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClickExpand = () => {
    setExpanded(true);
  };

  const items = React.Children.toArray(children)
    .filter(child => React.isValidElement(child))
    .map((child, index) => <li key={`child-${index}`}>{child}</li>);

  return presenter({
    tag,
    children: insertSeparators(
      expanded || items.length <= maxItems ? items : renderItemsBeforeAndAfter({
        items,
        itemsAfterCollapse,
        itemsBeforeCollapse,
      }, handleClickExpand),
      separator
    ),
    className,
  });
};

/**
 * Breadcrumb
 * メニューの間にセパレイト文字をいれる
 * @param items
 * @param separator
 */
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

/**
 * ヘルパー関数
 * 指定されたitemsBeforeCollapseとitemsAfterCollapseの数だけ最初と最後のitemを残して
 * それ以外の中間の項目を省略
 * 現状の長さで問題ないときはそのまま返す
 */
export const renderItemsBeforeAndAfter = ({items, itemsBeforeCollapse, itemsAfterCollapse}, onClick) => {

  if (itemsBeforeCollapse + itemsAfterCollapse >= items.length) {
    return items;
  }

  return [
    ...items.slice(0, itemsBeforeCollapse),
    <li key={"ellipsis"} className={styles.ellipsis}>
      <button onClick={onClick}>...</button>
    </li>,
    ...items.slice(items.length - itemsAfterCollapse, items.length),
  ];
};


