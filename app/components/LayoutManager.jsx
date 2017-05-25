import React, { Component } from 'react';

import DesktopLayout from './desktop/DesktopLayout'

class LayoutManager extends Component {
  /* Always render DesktopLayout for now */
  render() {
    return (
      <DesktopLayout />
    );
  }
}

export default LayoutManager;
