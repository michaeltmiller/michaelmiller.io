import React from 'react';
import Meta from '../../components/meta';
import Contact from '../../components/contact';
import { ProjectPanel } from '../../components/project';
import Wrapper from '../../components/wrapper';

// import projects from '../../data/projects';

import styles from './styles.module.css';

export default ({ data, location}) => {
 
  return (<div>
    <Meta title="Work" description="Web applications, static websites built with or by Michael Miller." location={location} />

    {data.allProjectsJson.edges.map((node, i) =>  <ProjectPanel project={node} key={node.slug} index={i}/>)}

    <div className={styles.contact}>
      <Wrapper>
        <Contact title="Your project here?" />
      </Wrapper>
    </div>
  </div>)
;}


export const query = graphql`
query AllProjectQuery {
    allProjectsJson{
      edges{
          node {
            className
            description
            text
            title
            links{
              website
            }
            slug
            theme{
              background
              light
            }
            cover{
              source
              alternative
            }
        }
      }
    } 
}
`