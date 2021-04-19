import React from "react";
import { Row, Col, Button, Typography } from "antd";
import PropTypes from "prop-types";
import { ReactComponent as RedHexagon } from "images/hexagon-red.svg";

const { Title } = Typography;
const BottomBanner = ({ className }) => {
    return (
        <>
            <Row className={className} justify="center" align="center">
                <Col md={12} sm={24} className={`${className}-text-wrapper`}>
                    <Title level={1} className="title">
                        Accelerate your time-to-market and take the lead
          </Title>
                    <a target="_blank" key="a">
                        <Button type="primary">Contact Us</Button>
                    </a>
                </Col>
                {/* <div className={`${className}-img-wrapper`}>
                    <RedHexagon />
                </div> */}
            </Row>
        </>
    );
};

BottomBanner.propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
};
BottomBanner.defaultProps = {
    className: "bottom-banner",
};

export default BottomBanner;
