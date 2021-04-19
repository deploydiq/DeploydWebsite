import React from 'react';
import Page from './Page';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BackTop } from 'antd';

const PrivacyPolicy = () => {
  return [
    <BackTop />,
    <Header key="header" />,
    <Page />,
    <Footer />
  ]
}

export default PrivacyPolicy;