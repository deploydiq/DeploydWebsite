import React from "react";
import { Row, Col, Typography, Card } from "antd";
import PropTypes from "prop-types";

const { Title, Text } = Typography;
const Page5 = ({ className }) => {
  return (
    <div className={`${className}-bg`}>
      <div className="text-center">
        <Title className="title" level={2} key="title">
          Our offices
          </Title>
          <span key="line" className="separator" />
      </div>
      <Row className={className}>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Card bordered={false}>
            <Title level={3} className="title-2">USA</Title>
            <Text>
              Deployd Technologies Private Limited
                <br />
                100 Congress Avenue - Suite 2000
                <br />
                Austin, TX - 78701
              </Text>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <div className={`${className}-text-wrapper`}>
            <Card bordered={false}>
              <Title level={3} className="title-2">India</Title>
              <Text>
                Deployd Technologies Private Limited
                  <br />
                  501-509, Tower D, 5th Floor, Diamond District,
                  <br />
                  No. 150 Old Airport Road, Near Domlur Flyover, 
                  <br />
                  Kodihalli, Bengaluru, Karnataka, India - 560008
                </Text>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Page5.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  navToShadow: PropTypes.func,
};
Page5.defaultProps = {
  className: "section5",
};

export default Page5;
