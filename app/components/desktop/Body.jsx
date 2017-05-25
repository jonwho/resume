import React, { Component } from 'react';

import Aside from './Aside';
import MainSection from './MainSection';
import PdfVersion from './PdfVersion';

class Body extends Component {
  render() {
    return (
      <main className="resume-body clearfix">
        <Aside />
        <MainSection />
        <PdfVersion />
      </main>
    );
  }
}

export default Body;
