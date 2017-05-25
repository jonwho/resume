import React, { Component } from 'react';

class Augmonted extends Component {
  render() {
    return (
      <section className="subsection">
        <h1 className="title"><a href="http://augmonted.github.io">augmonted</a></h1>
        <ul className="project-list">
          <li>Voted 1st place app in CSE190 Mobile Development 2015 class</li>
          <li>Utilizes Qualcomm Vuforia API for augmented reality</li>
          <li>User interface with focus on Google's Material Design</li>
          <li>Log in with either Facebook Graph API or email verification</li>
          <li>Amazon EC2 instance hosts both MySQL and PHP middleware</li>
        </ul>
      </section>
    );
  }
}

export default Augmonted;
