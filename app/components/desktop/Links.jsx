import React, { Component } from 'react';

class Links extends Component {
  render() {
    return (
      <div>
        <p className="topic">links</p>
        <section className="subsection">
          <p className="description"><a href="http://github.com/jonwho">GitHub://<strong>jonwho</strong></a></p>
          <p className="description"><a href="http://linkedin.com/in/jonwho">LinkedIn://<strong>jonwho</strong></a></p>
          <p className="description"><a href="https://cse134bteam3-hw5.firebaseapp.com/">WebApp://<strong>CoinFlip</strong></a></p>
          <p className="description"><a href="https://playwithfire.firebaseapp.com/">ChatApp://<strong>SimpleChat</strong></a></p>
          <p className="description"><a href="https://github.com/jonwho/lolxin">RubyGem://<strong>Lolxin</strong></a></p>
        </section>
      </div>
    );
  }
}

export default Links;
