import React from "react";
import SEO from "../../seo";
import Header from "../../Organisms/Header";

const NotFoundTemplate = () => {
  return (
    <div>
      <SEO title="404: Not found" />
      <Header />
      <main>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </main>
      <footer style={{ minHeight: "50px", backgroundColor: "blue" }}>footer</footer>
    </div>
  );
};

export default NotFoundTemplate;
