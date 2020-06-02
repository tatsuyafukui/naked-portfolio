import React, { useState, ReactNodeArray } from 'react';
import style from './style.module.scss';
import { containPresenter } from '../../utils/HoC';

interface IProps {
  maxItems?: number;
  itemsAfterCollapse?: number;
  itemsBeforeCollapse?: number;
  separator?: React.ReactNode;
  className?: string;
  tag?: 'div' | 'nav';
}

interface PresenterProps {
  className: string;
  children: React.ReactNode;
  tag: 'div' | 'nav';
}

interface ContainerProps extends IProps {
  presenter: (presenter: PresenterProps) => JSX.Element;
}

/**
 * プレゼンター
 * コンテナーから渡されたメニューを表示する
 * @param items
 * @param separator
 */
const BreadcrumbPresenter: React.FC<PresenterProps> = ({
  tag: Tag,
  children,
  className,
}) => (
  <Tag className={[style.root, className].join(' ')}>
    <ol className={style.ol}>{children}</ol>
  </Tag>
);

/**
 * コンテナー
 * メニューに応じてリストを生成してpresenterを呼び出す
 * @param items
 * @param separator
 */
const BreadcrumbContainer: React.FC<ContainerProps> = ({
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

  /**
   * ヘルパー関数
   * 指定された数だけ最初と最後のITEMを残してそれ以外の中間の項目を省略
   * 現状の長さで問題ないときはそのまま返す
   */
  const renderItemsBeforeAndAfter = (
    allItems: ReactNodeArray
  ): ReactNodeArray => {
    const handleClickExpand = () => {
      setExpanded(true);
    };

    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
      return allItems;
    }

    return [
      ...allItems.slice(0, itemsBeforeCollapse),
      <li key={'ellipsis'} className={style.ellipsis}><button onClick={handleClickExpand}>...</button></li>,
      ...allItems.slice(allItems.length - itemsAfterCollapse, allItems.length),
    ];
  };

  /**
   * ヘルパー関数
   * メニューの間にセパレイト文字をいれる
   * @param items
   * @param separator
   */
  const insertSeparators = (
    items: React.ReactNodeArray,
    separator: React.ReactNode
  ) => {
    return items.reduce(
      (acc: React.ReactNodeArray, current: React.ReactNode, index: number) => {
        if (index < items.length - 1) {
          acc = acc.concat(
            current,
            <li
              aria-hidden
              key={`separator-${index}`}
              className={style.separator}
            >
              {separator}
            </li>
          );
        } else {
          acc.push(current);
        }

        return acc;
      },
      []
    );
  };


  /**
   * main 処理
   */
  const allItems = React.Children.toArray(children)
    .filter(child => {
      return React.isValidElement(child);
    })
    .map((child, index) => <li key={`child-${index}`}>{child}</li>);

  return presenter({
    tag,
    children: insertSeparators(
      expanded || allItems.length <= maxItems
        ? allItems
        : renderItemsBeforeAndAfter(
            allItems
          ),
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
const Breadcrumb: React.FC<IProps> = containPresenter(
  BreadcrumbContainer,
  BreadcrumbPresenter
);

Breadcrumb.defaultProps = {
  maxItems: 8,
  itemsAfterCollapse: 1,
  itemsBeforeCollapse: 1,
  separator: '/',
  tag: 'nav',
};

export default Breadcrumb;



