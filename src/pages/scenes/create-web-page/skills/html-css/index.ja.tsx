import React, {useEffect, useState} from 'react';
import SkillTemplate from '../../../../../components/Templates/SkillTemplate';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Locale, ROUTE } from '../../../../../constants';
import cheerio from 'cheerio';

interface IProps {
  data: any;
}

const HtmlCssPage: React.FC<IProps> = ({ data }) => {
  const [t, i18n] = useTranslation();
  const [metaData, setMetaData] = useState([]);

  useEffect(() => {
    // urlMetadata('/', )
    // .then((data) => {
    //
    //   console.log(data);
    //
    // }).catch(e => {
    //   console.log(e);
    // })



    async function getMetaProps(url: string) {
      const result = await fetch(url, {
        mode: 'cors',
        cache: "no-cache",
      }).then(res => {
        if (res.ok) { return res.text() }
      }).then(html => {
        console.log(html);
        const metaProps = extractMetaProps(html)
        // console.log(metaProps);
        return metaProps
      }).catch(e => {
        throw e
      })
      return result
    }

    function extractMetaProps(html: string) {
      const $ = cheerio.load(html)
      let results: any = []
      $('head meta').each((i: number, el: any) => {
        const property = $(el).attr('property')
        const content = $(el).attr('content')
        if (property && content) {
          results.push({ [property]: content })
        }
      })
      results.sort((a: string,b: string) => {
        if (Object.keys(a)[0] < Object.keys(b)[0]) return -1
        if (Object.keys(a)[0] > Object.keys(b)[0]) return 1
        return 0
      })
      return results
    }

    getMetaProps('https://prog-8.com/languages/html')
    getMetaProps('https://www.amazon.co.jp/dp/4822283119')
    getMetaProps('https://ja.reactjs.org/docs/typechecking-with-proptypes.html')

  }, [])


  const skill = {
    id: t('Skill.HTML&CSS.id'),
    title: t('Skill.HTML&CSS.heading'),
    overview: t('Skill.HTML&CSS.overview.content'),
    figure: data.figure.childImageSharp.fluid,
    purpose: {
      heading: t('Skill.HTML&CSS.purpose.heading'),
      content: t('Skill.HTML&CSS.purpose.content'),
    },
    learn: {
      heading: t('Skill.HTML&CSS.learn.heading'),
      standard: {
        heading: t('Skill.HTML&CSS.learn.standard.heading'),
        basic: {
          heading: t('Skill.HTML&CSS.learn.standard.basic.heading'),
          list: [
            t('Skill.HTML&CSS.learn.standard.basic.item1'),
            t('Skill.HTML&CSS.learn.standard.basic.item2'),
            t('Skill.HTML&CSS.learn.standard.basic.item3'),
            t('Skill.HTML&CSS.learn.standard.basic.item4'),
            t('Skill.HTML&CSS.learn.standard.basic.item5'),
          ],
        },
        practical: {
          heading: t('Skill.HTML&CSS.learn.standard.practical.heading'),
          list: [
            t('Skill.HTML&CSS.learn.standard.practical.item1'),
            t('Skill.HTML&CSS.learn.standard.practical.item2'),
          ],
        },
      },
      overall: {
        heading: t('Skill.HTML&CSS.learn.overall.heading'),
        content: t('Skill.HTML&CSS.learn.overall.content'),
      },
    },
    link: '/scenes/create-web-page/skills/html-css',
    image: data.skillImage.childImageSharp.fixed,
  };

  const breadcrumbList = [
     {
      label: 'Home',
      link: ROUTE.JA_ROOT,
    },
    {
      label: t('Scene.scene1.id'),
      link: ROUTE.JA_ROOT+ROUTE.SCENE_CREATE_WEB_PAGE,
    }
  ]

  return (
    <SkillTemplate
      lang={i18n.language}
      locale={Locale.ja}
      skill={skill}
      breadcrumbList={breadcrumbList}
    />
  );
};

export default HtmlCssPage;

export const query = graphql`
  query {
    skillImage: file(
      relativePath: { eq: "scenes/create-web-page/skills/html-css/icon.png" }
    ) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    figure: file(
      relativePath: { eq: "scenes/create-web-page/skills/html-css/figure.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
