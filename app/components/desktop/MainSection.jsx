import React, { Component } from 'react';

import Experience from './Experience';
import Projects from './Projects';

class MainSection extends Component {
  render() {
    return (
      <section className="resume-main">
        <Experience />
        <Projects />
      </section>
    );
  }
}

export default MainSection;
