import React from "react";
import { enquireScreen } from "enquire-js";
import Header from "../components/Header";
import Banner from "./Banner";
import Page2 from "./Page2";
import Page5 from "./Page5";
import BottomBanner from "../components/BottomBanner";
import Footer from "../components/Footer";
import "styles/style";

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Features extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === "leave" });
  };
  render() {
    return [
      <Header key="header" />,
      <Banner
        key="banner"
        isMobile={this.state.isMobile}
        navToShadow={this.navToShadow}
      />,
      <Page2 key="page2" isMobile={this.state.isMobile} />,
      <Page5 key="page5" isMobile={this.state.isMobile} />,
      // <BottomBanner key="bottombanner" />,
      <Footer key="footer" isMobile={this.state.isMobile} />,
    ];
  }
}
export default Features;
