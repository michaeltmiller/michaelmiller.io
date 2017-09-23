import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';



import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>I'm a web developer with a facsincation in all things modern web devopment. Currently located in Salt Lake City, Utah.</p>
          <p>After about of year of self directed learning I made the decision to enroll in DevMtn (Curriculum <OutboundLink to="https://devmountain.com/web-bootcamp-immersive#/curriculum">Here</OutboundLink>) to accelerate my progress towards making the jump into professional software development.</p>
          <p>When not actively expanding my skillset you can find me working on my extremely mediocre golf swing or listening to a podcast.</p>
          <p>If you have a project or role in mind, <Link to="/contact">get in touch</Link>.</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Presentation</h4>
            <p>Bootstrap, Foundation, Css, Html, Less, Sass</p>
            <h4>Javascript</h4>
            <p>Angular, React, Gulp, ES5, jQuery</p>
            <h4>Server</h4>
            <p>Express, Node, PostgreSQL, Massive</p>
            <h4>Other</h4>
            <p>Git, Gatsby</p>
          </div>

        </aside>
      </div>
    </Wrapper>
  </ContentPage>
);

export default About;
