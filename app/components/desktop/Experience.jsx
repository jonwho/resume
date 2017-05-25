import React, { Component } from 'react';

import WhisperApp from './WhisperApp';
import FullscreenMedia from './FullscreenMedia';
import SNEI from './SNEI';
import BridgeCrest from './BridgeCrest';
import Thermo from './Thermo';

class Experience extends Component {
  render() {
    return (
      <div>
        <p className="topic">experience</p>
        <WhisperApp />
        <FullscreenMedia />
        <SNEI />
        <BridgeCrest />
        <Thermo />
      </div>
    );
  }
}

export default Experience;
