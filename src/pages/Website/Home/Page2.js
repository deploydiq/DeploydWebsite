import React from "react";
import PropTypes from "prop-types";
import { Button, Typography, Row, Col } from "antd";
import BannerImage from "../components/BannerImage";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Page2 = ({ className, isMobile }) => {
  return (
    <div className={className}>
      <Row align="center" justify="center">
        <Col xs={0} sm={0} md={24}>
          <Title className="title" level={2} key="title">
            Introducing Deployd
          </Title>
          <span key="line" className="separator" />
        </Col>
        <Col md={12}>
          <div style={{width: isMobile ? '100%' : '90%'}} className={`${className}-img-wrapper`}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qeQqZRMm3_E"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
          </div>
        </Col>
        <Col sm={0} xs={0} md={12}>
          <div className={`${className}-text-wrapper`}>
            <Title level={2} className="title-2">
              Deployd provides intelligent insights about the impacted
              functionality and testing needs of the system
            </Title>
            <Text type="secondary" className="main-info" key="p">
              Deployd is setting the new standard to address complex
              requirements for your enterprise projects
            </Text>
            <br />
            <Link to="/features" key="a">
              <Button type="primary">Explore product</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Page2.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  navToShadow: PropTypes.func,
};
Page2.defaultProps = {
  className: "page2",
};

export default Page2;
