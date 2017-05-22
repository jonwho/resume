import React, { Component } from 'react';

class Aside extends Component {
  render() {
    return (
      <aside className="resume-aside">
        <p className="topic">education</p>
        <section className="subsection">
          <p className="description"><strong>UC SAN DIEGO</strong></p>
          <p className="description">Bachelor of Science</p>
          <p className="description">in Computer Science</p>
          <p className="description">and Engineering</p>
          <p className="description">Grad. June 2015 &#124; La Jolla, CA</p>
        </section>

        <p className="topic">links</p>
        <section className="subsection">
          <p className="description"><a href="http://github.com/jonwho">GitHub://<strong>jonwho</strong></a></p>
          <p className="description"><a href="http://linkedin.com/in/jonwho">LinkedIn://<strong>jonwho</strong></a></p>
          <p className="description"><a href="https://cse134bteam3-hw5.firebaseapp.com/">WebApp://<strong>CoinFlip</strong></a></p>
          <p className="description"><a href="https://playwithfire.firebaseapp.com/">ChatApp://<strong>SimpleChat</strong></a></p>
          <p className="description"><a href="https://github.com/jonwho/lolxin">RubyGem://<strong>Lolxin</strong></a></p>
        </section>

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

        <p className="topic">skills</p>
        <section className="subsection">
          <h1 className="title">languages</h1>
          <p className="description">Java &bull; JavaScript &bull; Ruby</p>
          <p className="description">CoffeeScript &bull; Elixir &bull; Erlang</p>
        </section>

        <section className="subsection">
          <h1 className="title">web development</h1>
          <p className="description">HTML &bull; CSS &bull; Rails &bull; Phoenix</p>
          <p className="description">Sass &bull; Grunt &bull; Gulp &bull; Bower</p>
          <p className="description">Angular &bull; React &bull; ES6 &bull; Babel</p>
          <p className="description">Bootstrap &bull; Material Design</p>
        </section>

        <section className="subsection">
          <h1 className="title">infrastructure</h1>
          <p className="description">Heroku &bull; Amazon Web Services</p>
          <p className="description">Docker &bull; Vagrant</p>
        </section>

        <section className="subsection">
          <h1 className="title">miscellaneous</h1>
          <p className="description">Git &bull; XML &bull; JSON &bull; Firebase</p>
          <p className="description">GitHub &bull; GitLab &bull; Travis CI</p>
          <p className="description">Bash &bull; Ubuntu &bull; CentOS</p>
          <p className="description">PostgreSQL &bull; MySQL &bull; Vim</p>
          <p className="description">Cassandra</p>
        </section>
      </aside>
    );
  }
}

export default Aside;
