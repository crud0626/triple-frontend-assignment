import './common/reset.scss';
import './App.scss';

import React from 'react';
import Awards from './components/Awards';
import ContentLogo from './components/ContentLogo';
import Metrics from './components/Metrics';

const App = () => {
  return (
    <div className="SectionContainer">
      <div className="ResponseiveSection">
        <ContentLogo />
        <Metrics />
        <Awards />
      </div>
    </div>
  );
};

export default App;
