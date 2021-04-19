import React from 'react';
import './App.less'
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Website/Home'
import About from 'pages/Website/About'
import Features from 'pages/Website/Features';
import PrivacyPolicy from 'pages/Website/PrivacyPolicy'
import ScrollToTop from 'pages/Website/components/ScrollToTop';

const App = () => {
  return (
    <div className="site-layout-background">
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/features" component={Features} />
        <Route path="/about/privacy-policy/" component={PrivacyPolicy} />
      </Switch>
    </div>
  );
}

export default App;