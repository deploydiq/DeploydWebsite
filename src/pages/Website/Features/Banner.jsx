import React from 'react';
import PropTypes from 'prop-types';
import div from 'rc-queue-anim';
import { Button, Typography, Row, Col } from 'antd';
import { Element } from 'rc-scroll-anim';
import { assets } from './data';
import { ReactComponent as FeatureIllustration } from 'images/feature-illustration.svg';

const { Title, Text } = Typography;

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <div onChange={navToShadow}>
        <Row className={className}>
          <Col sm={24} md={12}>
            <div
              className={`${className}-text-wrapper`}
            >
              <Title level={1} className="title">Trace impacts and test before you deploy</Title>
            </div>
          </Col>
          <Col sm={24} xs={24} md={12}>
            <div className={`${className}-img-wrapper`}>
                <FeatureIllustration />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
