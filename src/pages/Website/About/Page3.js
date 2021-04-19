import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { page3 } from "./data";
import PropTypes from "prop-types";

const { Title, Text } = Typography;

const Page3 = ({ className }) => {
  const children = page3.map((card, i) => (
    <Col
      className={`${className}-card-wrapper`}
      key={i.toString()}
      xs={24}
      sm={24}
      md={24}
      lg={12}
      xl={12}
      xxl={12}
    >
      <Card className={`${className}-card`} style={card.style}>
        <Title level={3} className="title-2">{card.title}</Title>
        {card.img}
        <Text type="secondary" className="description">
          {card.description}
        </Text>
      </Card>
    </Col>
  ));
  return (
    <div className={className}>
      <div
        className="text-center"
      >
        <Title level={2} className="title" key="title">
          Our core values
        </Title>
        <span key="line" className="separator" />
        <div
          className={`${className}-card-wrapper text-center`}
        >
          <Row gutter={16}>{children}</Row>
        </div>
      </div>
    </div>
  );
};

Page3.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  navToShadow: PropTypes.func,
};
Page3.defaultProps = {
  className: "section3",
};

export default Page3;
