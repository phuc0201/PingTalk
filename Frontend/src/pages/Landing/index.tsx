import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
const Landing: React.FC = () => {
  return (
    <div>
      <div className="landing-page-wapper relative">
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
