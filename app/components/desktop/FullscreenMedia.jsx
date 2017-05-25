import React, { Component } from 'react';

class FullscreenMedia extends Component {
  render() {
    return (
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
    );
  }
}

export default FullscreenMedia;
