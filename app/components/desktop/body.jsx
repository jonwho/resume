import React, { Component } from 'react';

import Aside from './aside';
import MainSection from './main_section';
import PdfVersion from './pdf_version';

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
