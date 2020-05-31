import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../Layout';
import SEO from '../../seo';
import Img from 'gatsby-image';
import style from './style.module.scss';
import Txt from '../../Atoms/Txt';
import Heading from '../../Atoms/Heading';
import { Level, Locale } from '../../../constants';
import MediaObjectLayout from '../../Atoms/MediaObjectLayout';
import Breadcrumb from '../../Atoms/Breadcrumb';

interface IProps {
  skill: any;
  locale: Locale;
  lang: string;
  breadcrumbList: {
    label: string;
    link: string;
  }[]
}

const SkillTemplate: React.FC<IProps> = ({ skill, lang, locale ,breadcrumbList}) => {
  return (
    <Layout locale={locale}>
      <SEO lang={lang} title={skill.title} description={skill.description} />
      <div className={style.container}>
        <div className={style.titleHeader}>
          <Breadcrumb>
            {breadcrumbList.map(item => (
              <Link key={item.label} to={item.link}>{item.label}</Link>
            ))}
            <Txt>{skill.title}</Txt>
          </Breadcrumb>
          <div className={style.title}>
            <span>
              <Img fixed={skill.image} />
            </span>
            <Heading level={Level.h1}>{skill.title}</Heading>
          </div>
        </div>
        <div className={style.body}>
          {/* create component  */}
          <div>
            <Txt dangerouslySetInnerHTML={{ __html: skill.overview }} />
            <Img fluid={skill.figure} />
            <Heading level={Level.h3}>{skill.purpose.heading}</Heading>
            <Txt dangerouslySetInnerHTML={{ __html: skill.purpose.content }} />
            <Heading level={Level.h2}>{skill.learn.heading}</Heading>
            <Heading level={Level.h3}>{skill.learn.standard.heading}</Heading>
            <Heading level={Level.h4}>
              {skill.learn.standard.basic.heading}
            </Heading>
            <ul>
              {skill.learn.standard.basic.list.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Heading level={Level.h4}>
              {skill.learn.standard.practical.heading}
            </Heading>
            <ul>
              {skill.learn.standard.practical.list.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Heading level={Level.h3}>{skill.learn.overall.heading}</Heading>
            <Txt
              dangerouslySetInnerHTML={{ __html: skill.learn.overall.content }}
            />
          </div>

          <div className={style.recommend}>
            <MediaObjectLayout>
              <div></div>
              <div></div>
            </MediaObjectLayout>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SkillTemplate;
