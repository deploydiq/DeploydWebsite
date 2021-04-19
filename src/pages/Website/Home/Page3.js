import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { page3 } from "./data";
import PropTypes from "prop-types";

const { Title, Text } = Typography;

const Page3 = ({ className }) => {
  const children = page3.map((card, i) => (
    <Col
      className="card-wrapper"
      key={i.toString()}
      sm={24}
      md={24}
      lg={8}
    >
      <Card className={`${className}-card`}>
        <div className={`${className}-card-content`}>
          <Title level={5} className="title-2">
            {card.title}
          </Title>
          <div>
          {card.img}
          </div>
          <Text type="secondary" className="description">
            {card.description}
          </Text>
        </div>
      </Card>
    </Col>
  ));
  return (
    <div className={className}>
      <div className="text-center">
        <Title level={2} className="title" key="title">
          Helping teams work smarter
        </Title>
        <span key="line" className="separator" />
      </div>
      <div className={`${className}-card-wrapper text-center`}>
        <Row>{children}</Row>
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
  className: "page3",
};

export default Page3;
