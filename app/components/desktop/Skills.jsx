import React, { Component } from 'react';

import Languages from './Languages';
import WebDevelopment from './WebDevelopment';
import Infrastructure from './Infrastructure';
import Miscellaneous from './Miscellaneous';

class Skills extends Component {
  render() {
    return (
      <div>
        <p className="topic">skills</p>
        <Languages />
        <WebDevelopment />
        <Infrastructure />
        <Miscellaneous />
      </div>
    );
  }
}

export default Skills;
