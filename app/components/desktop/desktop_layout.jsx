import React, { Component } from 'react';

import Header from './header';
import Body from './body';

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
