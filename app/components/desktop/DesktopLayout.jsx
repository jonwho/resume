import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';

class DesktopLayout extends Component {
  render() {
    return (
      <div className='resume'>
        <Header />
        <Body />
      </div>
    );
  }
}

export default DesktopLayout;
