import React, { Component } from 'react';

class MainSection extends Component {
  render() {
    return (
      <section className="resume-main">
        <p className="topic">experience</p>
        <section className="subsection">
          <ul className="job">
            <li>
              <ul>
                <li>whisper app</li>
                <li>software developer</li>
              </ul>
              <ul>
                <li>November 2016 - Present</li>
                <li>Venice, CA</li>
              </ul>
              <ul>
                <li>Set up website monetization strategies with DoubleClick for Publisher</li>
                <li>Short lived marketing campaigns via Google Tag Manager</li>
                <li>A / B testing to track mobile app installs through website</li>
                <li>Refactor revenue reporting scripts</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="subsection">
          <ul className="job">
            <li>
              <ul>
                <li>fullscreen media</li>
                <li>full stack software engineer</li>
              </ul>
              <ul>
                <li>August 2015 - November 2016</li>
                <li>Playa Vista, CA</li>
              </ul>
              <ul>
                <li>Develop tools in and around Video.js for HTML5 video support</li>
                <li>Write RSpec3 tests covering unit and feature testing</li>
                <li>Client side quality control tools written in Angular/React</li>
                <li>Automate asset workflows from ingestion to publishing</li>
                <li>Support VTT and XML captions with conversion and publishing</li>
                <li>Create Sidekiq workers to run scheduled jobs from Redis</li>
                <li>Complete redesign of UI to optimize UX and development time</li>
                <li>Migrate data so new references allow tech ops to monitor progress</li>
                <li>Make use of AWS API S3, SNS, and SQS to connect internal services</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="subsection">
          <ul className="job">
            <li>
              <ul>
                <li>sony network entertainment</li>
                <li>software architect intern</li>
              </ul>
              <ul>
                <li>June 2014 - Sep 2014</li>
                <li>San Diego, CA</li>
              </ul>
              <ul>
                <li>Worked on continuous integration for OAuth 2.0 on the network platform</li>
                <li>Created internal application with AngularJS to improve client integration</li>
                <li>Made a message board to gather and discuss ideas in hackathon with MEAN</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="subsection">
          <ul className="job">
            <li>
              <ul>
                <li>bridgecrest medical</li>
                <li>software engineer</li>
              </ul>
              <ul>
                <li>Oct 2013 - April 2014</li>
                <li>San Diego, CA</li>
              </ul>
              <ul>
                <li>Created web portal application in Ruby on Rails and delegated tasks</li>
                <li>Maintain application on server and deploy test applications on Heroku</li>
                <li>Started work on REST APIs for mobile application to use</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="subsection">
          <ul className="job">
            <li>
              <ul>
                <li>thermo fisher scientific</li>
                <li>software development intern</li>
              </ul>
              <ul>
                <li>June 2013 - Sep 2014</li>
                <li>Carlsbad, CA</li>
              </ul>
              <ul>
                <li>Developed performance tests for application on Amazon Web Services</li>
                <li>Updated Global IT functions resource page to improve employee experience</li>
                <li>Used AWS Java APIs to test data from SOAP/REST endpoints</li>
              </ul>
            </li>
          </ul>
        </section>

        <p className="topic">projects</p>
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

        <section className="subsection">
          <h1 className="title"><a href="https://www.youtube.com/watch?v=mYUiSeqqgDY&list=PLbbCsk7MUIGfXpnd9XN-pBeCd6ixuCQ2X">speedy type</a></h1>
          <ul className="project-list">
            <li>Designed to aid those suffering from Locked-In Syndrome</li>
            <li>Uses both Microsoft Surface and Eye Tribe technology</li>
            <li>Allows patient to initiate conversation with loved ones</li>
            <li>3 to 5 times faster than traditional means of communication</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default MainSection;
