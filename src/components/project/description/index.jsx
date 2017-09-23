import React from 'react';

import Wrapper from '../../wrapper';

import styles from './styles.module.css';

const ProjectDescription = ({ project, media }) => (
  <Wrapper className={styles.content}>
    <div className={styles.media}>
      {media}
    </div>

    <div className={styles.information}>
    <h1>{project.title}</h1>
      <p>{project.text}</p>
    </div>
  </Wrapper>
);

export default ProjectDescription;
