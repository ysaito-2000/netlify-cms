import React from 'react';
import SEO from '../components/SEO/SEO';
import LandingPage from '../components/LandingPage/LandingPage';
import '../styles/index.css';

const IndexPage = ({ data }) => {
  console.log('Route to index: ', data);
  return (
      <div className="layout">
        <SEO title="" />
        <LandingPage />
      </div>
  );
};

export default IndexPage;
