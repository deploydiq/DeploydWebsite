import React from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col, Card, Typography } from "antd";
import { page4 } from "./data";
import PropTypes from "prop-types";

const { Title, Text } = Typography;

class Page5 extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  };
  static defaultProps = {
    className: "sec4",
  };
  render() {
    const { className, isMobile } = this.props;
    const children = page4.map((card, i) => (
      <Col
        className={`${className}-card-wrapper`}
        key={i.toString()}
        sm={24}
        md={24}
        lg={12}
      >
        <Title level={4} className="title-2">{card.title}</Title>
        <Card className={`${className}-card`} style={card.style} bordered={false}>
          {card.img}
          <Text type="secondary" className="description">
            {card.description}
          </Text>
        </Card>
      </Col>
    ));
    return (
      <div className={className} id="use-cases">
        <div className="text-center">
          <Title level={2} className="title" key="title">
            Use cases
          </Title>
          <span key="line" className="separator" />
        </div>
        <div className={`${className}-card-wrapper text-center`}>
          <Title level={2} className="title">
            How can Deployd help our users?
          </Title>
          <Row>{children}</Row>
        </div>
      </div>
    );
  }
}

export default Page5;
