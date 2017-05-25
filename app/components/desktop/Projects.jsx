import React, { Component } from 'react';

import Augmonted from './Augmonted';
import SpeedyType from './SpeedyType';

class Projects extends Component {
  render() {
    return (
      <div>
        <p className="topic">projects</p>
        <Augmonted />
        <SpeedyType />
      </div>
    );
  }
}

export default Projects;
