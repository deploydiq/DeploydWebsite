import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Typography, Row, Col } from 'antd';
import { Element } from 'rc-scroll-anim';
import { ReactComponent as Hexagon } from 'images/hexagon-about.svg'

const { Title } = Typography;

const Banner = ({ className, isMobile, navToShadow }) => {
  return (
    <Element component="section" onChange={navToShadow}>
      <Row className={className}>
        <Col sm={24} md={12}>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <Title className="title" level={1}>Our purpose is to help individuals bring software applications to life</Title>
          </QueueAnim>
        </Col>
        <Col sm={0} md={12}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ?
              null
              :
              <Hexagon />}
          </div>
        </Col>
      </Row>
    </Element>
  );
}

Banner.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  navToShadow: PropTypes.func,
}
Banner.defaultProps = {
  className: 'about-banner',
}

export default Banner;