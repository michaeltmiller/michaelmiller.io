import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

import Wrapper from '../../wrapper';

import themeStyles from '../themes.module.css';
import styles from './styles.module.css';

const ProjectPanel = ({ project , index, light }) => {
  const icon = require(`./images/${project.node.cover.source}.png`)


  return(
  <Link
    to={`/work/${project.node.slug}`}
    className={classNames(styles.panel, themeStyles[project.node.theme.light ? 'light' : 'dark'], styles[project.node.className])}
    style={{ background: `${project.node.theme.background}` }}
  >
    <Wrapper>
      <div className={classNames(styles.inner, themeStyles[(index+1)%2===0 ? 'even' : 'odd'])} style={{ backgroundImage: `url(${icon})` }}>
        <div className={styles.content}>
          <h2>{project.node.title}</h2>
          <p>{project.node.description}</p>
        </div>
      </div>
    </Wrapper>
  </Link>
);
}

export default ProjectPanel;