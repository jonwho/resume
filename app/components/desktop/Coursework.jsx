import React, { Component } from 'react';

class Coursework extends Component {
  render() {
    return (
      <div>
        <p className="topic">coursework</p>
        <section className="subsection">
          <h1 className="title">key courses</h1>
          <p className="description">Software Engineering</p>
          <p className="description">Software Tools &amp; Technology</p>
          <p className="description">Android Development</p>
          <p className="description">Data Structures</p>
          <p className="description">Operating Systems</p>
          <p className="description">Algorithms &amp; Design</p>
          <p className="description">Computer Architecture</p>
          <p className="description">Functional Programming</p>
          <p className="description">Ubiquitous Computing</p>
          <p className="description">Server Side Applications</p>
          <p className="description">Mobile Applications</p>
        </section>
      </div>
    );
  }
}

export default Coursework;
