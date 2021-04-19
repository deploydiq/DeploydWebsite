import React from "react";
import PropTypes from "prop-types";
import { Card, Typography, Row, Col } from "antd";
import { ReactComponent as Illustration } from "images/analyze-illustration.svg";
import { page2 } from "./data";

const { Title, Text, Paragraph } = Typography;

class Page2 extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  };
  static defaultProps = {
    className: "sec2",
  };
  render() {
    const { className, isMobile } = this.props;
    const children = page2.map((card, i) => (
      <Col
        className="sec3-card-wrapper"
        key={i.toString()}
        sm={24}
        md={24}
        lg={12}
      >
        <Card className="sec3-card" bordered={false}>
          {card.img}
          <Title level={4} className="title-2">
            {card.title}
          </Title>
          <Paragraph className="description">{card.description}</Paragraph>
        </Card>
      </Col>
    ));
    return (
      <div className={className} id="analyze">
        <Row align="center" justify="center">
          <Col xs={24} sm={24} md={24}>
            <Title className="title" level={2} key="title">
              Analyze
            </Title>
            <span key="line" className="separator" />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className={`${className}-img-wrapper`}>
              {isMobile ? null : <Illustration />}
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className={`${className}-text-wrapper`}>
              <Title level={2} className="title-2">
                Be aware of every code impact and take control of the system
                health
              </Title>
              <Text type="secondary" className="main-info" key="p">
                Powered by data and smart code, Deployd accurately extracts and
                generates a comprehensive report for any code modifications
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className={`${className}-img-wrapper`}>
              {!isMobile ? null : <Illustration />}
            </div>
          </Col>
        </Row>
        <Row className="sec3">{children}</Row>
      </div>
    );
  }
}

export default Page2;
