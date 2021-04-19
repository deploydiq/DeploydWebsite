import React from "react";
import { Row, Col, Button } from "antd";
import Icon from "@ant-design/icons";
import DeploydLogo from "images/DeploydLogo.js";
import { HashLink as Link } from 'react-router-hash-link';

const Logo = (props) => <Icon component={DeploydLogo} {...props} />;
const Footer = () => {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={8} sm={24} xs={24}>
            <Link to="/">
              <div className="footer-center">
                <h2>
                  <Logo />
                </h2>
              </div>
            </Link>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Features</h2>
              <div>
                <Link to="/features#analyze">Analyze</Link>
              </div>
              <div>
                <Link to="/features#use-cases">Use Cases</Link>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <div>
                <Link to="/about/privacy-policy">Privacy policy</Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
