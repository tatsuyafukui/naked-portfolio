import React from "react";
import styles from "./styles.module.scss";
import SEO from "../../seo";
import HolyGrailLayout, { HolyGrailTop, HolyGrailBottom, HolyGrailMain } from "../../Atoms/HolyGrailLayout";
import Header from "../../Organisms/Header";
import Top from "../../Organisms/Top";
import SceneList from "../../Organisms/SceneList";

const IndexTemplate = ({ topImage, scenes }) => {
  return (
    <HolyGrailLayout>
      <HolyGrailTop>
        <SEO title={""} description={""} />
        <Header />
        <Top topImage={topImage} />
      </HolyGrailTop>
      <HolyGrailMain>
        <main className={styles.main}>
          <div className={styles.container}>
            <SceneList scenes={scenes} />
          </div>
        </main>
      </HolyGrailMain>
      <HolyGrailBottom>
        <footer style={{ minHeight: "50px", backgroundColor: "blue" }}>footer</footer>
      </HolyGrailBottom>
    </HolyGrailLayout>
  );
};

export default IndexTemplate;
