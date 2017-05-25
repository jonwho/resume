import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LayoutManager from './components/LayoutManager';

class Resume extends Component {
  render() {
    return <LayoutManager />;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render( <Resume />, document.getElementById('root'));
});
