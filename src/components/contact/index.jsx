import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'I like messages.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:miller.t.michael@hotmail.com?subject=Hello%20Michael!" className={styles.link}>miller.t.michael@hotmail.com</a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/michaeltmiller/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/millertmichael/">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;
