import React from "react";
import PropTypes from "prop-types";
import { Typography, Row, Col } from "antd";
import { ReactComponent as Illustration } from "images/Illustration.svg";

const { Title, Text } = Typography;

const Page2 = ({ className, isMobile }) => {
  return (
    <>
      <Row className={className}>
        <Col xs={0} sm={0} md={12}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ? null : <Illustration />}
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div className={`${className}-text-wrapper`}>
            {isMobile ? (
              <>
                <Title level={2} className="title" key="title">
                  Our mission
                </Title>
                <span key="line" className="separator" />
              </>
            ) : (
              <Title level={1} className="title">
                Our mission
              </Title>
            )}
            <Text type="secondary" className={`${className}-main-info`} key="p">
              We live in an age where software impacts all aspects of our lives.
              Our mission is to empower software development and testing teams
              with tools to accelerate application delivery and reduce time to
              market in an ever-demanding technology world.
            </Text>
          </div>
        </Col>
      </Row>
    </>
  );
};

Page2.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  navToShadow: PropTypes.func,
};
Page2.defaultProps = {
  className: "section2",
};

export default Page2;
