import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Typography, Row, Col, Button } from 'antd';
import { Element } from 'rc-scroll-anim';
import BannerImage from '../components/BannerImage';
import {Link, useHistory} from 'react-router-dom'

const { Title, Text } = Typography;

const Banner = ({ className, isMobile, navToShadow }) => {
  const history = useHistory();
  return (
    <Element component="section" onChange={navToShadow}>
      <Row className={className}>
        <Col sm={24} md={13}>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <Title className="title" level={1}>Accelerate code delivery, with confidence</Title>
            <Text type="secondary" className="main-info" key="p">
              Deployd streamlines your devops process by enabling end-to-end visibility of overall system, dependencies and risk for faster and effective product updates
            </Text>
            <br />
            <Button type="primary" style={{marginTop: 20}} onClick={() => history.push('/features')} block={isMobile}>Explore product</Button>
          </QueueAnim>
        </Col>
        <Col sm={0} md={11}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ?
              null
              :
              <BannerImage />}
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
  className: 'banner',
}

export default Banner;