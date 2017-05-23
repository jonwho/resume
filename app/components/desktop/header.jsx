import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className='resume-header'>
        <p className="author"><span className="weak">Jonathan</span> W. Ho</p>
        <p className="author-metadata"><a href="http://jonwho.github.io">http://jonwho.github.io</a></p>
        <p className="author-metadata"><a href="mailto:jonwho.contact@gmail.com">jonwho.contact@gmail.com</a> &#124; <a href="tel:1-530-320-7863">530.320.7863</a></p>
        <span className='last-updated'>Last Updated on 31st March 2017</span>
      </section>
    );
  }
}

export default Header;
