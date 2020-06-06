import React from "react";
import SEO from "../../seo";
import HolyGrailLayout, { HolyGrailTop, HolyGrailBottom, HolyGrailMain } from "../../Atoms/HolyGrailLayout";
import Header from "../../Organisms/Header";

const NotFoundTemplate = () => {
  return (
    <HolyGrailLayout>
      <HolyGrailTop>
        <SEO title="404: Not found" />
        <Header />
      </HolyGrailTop>
      <HolyGrailMain>
        <main>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </main>
      </HolyGrailMain>
      <HolyGrailBottom>
        <footer style={{ minHeight: "50px", backgroundColor: "blue" }}>footer</footer>
      </HolyGrailBottom>
    </HolyGrailLayout>
  );
};

export default NotFoundTemplate;
