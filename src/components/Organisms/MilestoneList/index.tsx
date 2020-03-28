import React from 'react';
import {ImageName} from "../../../constants";
import Milestone from "../../Molecules/Milestone";
import {IMilestone} from '../../../types/milestone';

const MilestoneList = () => {

  const milestoneList: IMilestone[] = [
    {
      id: 'milestone5',
      heading: '継続してプロダクトを届けよう',
      reverse: false,
      link: '/milestones/keep-delivering',
      image: ImageName.milestoneImage,
      content: 'Webアプリケーションは公開して終わりではありません\n' +
        '新しい機能を追加し続けるために、継続してプロダクトを届ける準備をしましょう。',
    },
    {
      id: 'milestone4',
      heading: '公開できるプロダクトに必要なことを知ろう',
      reverse: true,
      link: '/milestones/product-release',
      image: ImageName.milestoneImage,
      content: 'プロダクトを公開するには責任が伴います。ユーザーに安心して使ってもらえるようにセキュリティの基本について学びましょう。',
    },
    {
      id: 'milestone3',
      heading: 'みんなで開発しよう',
      reverse: false,
      link: '/milestones/develop-together',
      image: ImageName.milestoneImage,
      content: '仲間と開発することはプロダクトを作る面白さの１つです。\n' +
        'チーム開発の基礎を学んで仲間を集める準備をしましょう。',
    },
    {
      id: 'milestone2',
      heading: 'Webアプリケーションを作ってみよう',
      reverse: true,
      link: '/milestones/create-web-application',
      image: ImageName.milestoneImage,
      content: '仲間と開発することはプロダクトを作る面白さの１つです。チーム開発の基礎を学んで仲間を集める準備をしましょう。',
    },
    {
      id: 'milestone1',
      heading: 'Webページを作れるようになろう',
      reverse: false,
      link: '/milestones/create-web-page',
      image: ImageName.milestoneImage,
      content: 'プロダクトを公開するには責任が伴います。ユーザーに安心して使ってもらえるようにセキュリティの基本について学びましょう。',
    },
  ];



  return (
    <>
      {milestoneList.map(item => {
        return (
          <Milestone
            key={item.id}
            id={item.id}
            heading={item.heading}
            reverse={item.reverse}
            link={item.link}
            image={item.image}
            content={item.content}
          />
        );
      })}
    </>
  )
};

export default MilestoneList;
