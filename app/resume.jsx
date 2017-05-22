import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LayoutManager from './components/layout_manager';

class Resume extends Component {
  constructor() {
    super()
  }

  render() {
    return <LayoutManager />;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Resume name='Jonathan W. Ho' />,
    document.getElementById('root')
  );
});
