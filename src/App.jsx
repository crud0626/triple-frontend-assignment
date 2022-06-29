import './common/reset.scss';
import './App.scss';

import React from 'react';
import AwardsContainer from './components/AwardsContainer';
import ContentLogo from './components/ContentLogo';
import MetricsContainer from './components/MetricsContainer';

const App = () => {
  return (
    <div className="SectionContainer">
      <div className="ResponseiveSection">
        <ContentLogo />
        <MetricsContainer />
        <AwardsContainer />
      </div>
    </div>
  );
};

export default App;
