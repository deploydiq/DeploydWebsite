import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import "styles/style";
import { privacyContent } from "./data";

const { Title } = Typography;

const Page = ({ className }) => {
    const children = privacyContent.map((data, i) => (
        <div key={i} id={data.id}>
            <Title level={3} className="title">
                {i + 1}. {data.title}
            </Title>
            {data.description}
        </div>
    ));

    return (
        <div className={className}>
            <Title level={1} className="title">
                Privacy Policy
            </Title>
            <p>Table of Contents</p>
            <ol>
                {privacyContent.map((data) => (
                    <li>
                        <a href={`#${data.id}`}>{data.title}</a>
                    </li>
                ))}
            </ol>
            {children}
        </div>
    );
};

Page.propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
};
Page.defaultProps = {
    className: "privacy",
};

export default Page;
