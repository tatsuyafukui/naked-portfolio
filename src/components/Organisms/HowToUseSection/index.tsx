import React from 'react';
import style from './style.css';
import Heading from '../../Atoms/Heading';
import { Level } from '../../../constants';
import HowToUseItem from '../../Molecules/HowToUseItem';
import { IList } from '../../../types/list';

const HowToUseSection: React.FC<{ list: IList[] }> = props => {
  return (
    <section className={style.root}>
      <Heading level={Level.h1}>ロードマップを使った学び方</Heading>

      {props.list.map(item => {
        return <HowToUseItem key={item.id} {...item} />;
      })}
    </section>
  );
};

export default HowToUseSection;
