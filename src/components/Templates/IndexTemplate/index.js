import React from 'react';
import SEO from '../../seo';
import HolyGrailLayout, {
  HolyGrailTop,
  HolyGrailBottom,
  HolyGrailMain,
} from "../../Atoms/HolyGrailLayout";
import Header from "../../Organisms/Header";


const IndexTemplate = () => {

  return (
    <HolyGrailLayout>
      <HolyGrailTop>
        <SEO
          title={''}
          description={''}
        />
        <Header/>
      </HolyGrailTop>
      <HolyGrailMain>
        <main style={{ minHeight: '300px', backgroundColor: 'yellow' }}>
          main
        </main>
      </HolyGrailMain>
      <HolyGrailBottom>
        <footer style={{ minHeight: '50px', backgroundColor: 'blue' }}>
          footer
        </footer>
      </HolyGrailBottom>
    </HolyGrailLayout>
  );
};

export default IndexTemplate;
