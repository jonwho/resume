import React, { Component } from 'react';

import Education from './Education';
import Links from './Links';
import Coursework from './Coursework';
import Skills from './Skills';

class Aside extends Component {
  render() {
    return (
      <aside className="resume-aside">
        <Education />
        <Links />
        <Coursework />
        <Skills />
      </aside>
    );
  }
}

export default Aside;
