import React from 'react';
import style from './style.css';
import Heading from '../../Atoms/Heading';
import { Level } from '../../../constants';
import Txt from '../../Atoms/Txt';
import Button from '../../Atoms/Button';
import {Link} from "gatsby";

const LsetsStartSection: React.FC = props => {
  return (
    <section className={style.root}>
      <Heading level={Level.h1}>さぁ、やってみよう</Heading>

      <Txt className={style.txt}>
        ここからは実際に使い方に沿って学んでいきましょう。
        <br />
        挫折しそうなときは、感情に流されない習慣や物事をボジティブに捉える癖を身につけたり、切磋琢磨できるコミュニティを探したりと、自分に合った学習方法や環境を知ることも大切です。
        <br />
        目標を達成できたときには、是非あなたのサクセスストーリーを教えて下さい。 Progate一同楽しみにお待ちしております。
        <br />
      </Txt>
      <div className={style.buttonContainer}>
        <Link to={'/'}><Button>学習をはじめる</Button></Link>
      </div>
    </section>
  );
};

export default LsetsStartSection;
