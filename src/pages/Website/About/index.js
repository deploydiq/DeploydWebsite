import React, { useState, useEffect } from "react";
import { enquireScreen } from "enquire-js";
import Header from "../components/Header";
import Banner from "./Banner";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page5 from "./Page5";
import Footer from "../components/Footer";
import "styles/style";

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b)
    });
  });

  const navToShadow = (e) => {
    setShowShadow(e.mode === "leave")
  }

  return [
    <Header key="header" />,
    <Banner
      key="banner"
      isMobile={isMobile}
      navToShadow={navToShadow}
    />,
    <Page2 key="page2" isMobile={isMobile} />,
    <Page3 key="page3" isMobile={isMobile} />,
    <Page5 key="page5" isMobile={isMobile} />,
    <Footer key="footer" isMobile={isMobile} />,
  ];
}

export default About;