import React from 'react';

import Carousel from '../components/carousel';
import Iphone from '../components/iphone';
import Macbook from '../components/macbook';
import OutboundLink from '../components/outbound-link';
import Wrapper from '../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../components/project';

import styles from './styles.module.css';


export default ({ data, location }) => {
const icon = require(`./img/${data.projectsJson.cover.source}.png`)
const images = [
  { src: require(`./img/${data.projectsJson.images.image1}.png`), description: 'image' },
  { src: require(`./img/${data.projectsJson.images.image2}.png`), description: 'image2' },
  { src: require(`./img/${data.projectsJson.images.image3}.png`), description: 'image4' },
  { src: require(`./img/${data.projectsJson.images.image4}.png`), description: 'image3' },
  { src: require(`./img/${data.projectsJson.images.image5}.png`), description: 'image5' }
]

  const image = (
    <div className={styles.image}>
      <img src={icon}  alt={data.projectsJson.cover.alternative} />
    </div>
  );
  const techused= (
    <aside className={styles.skills}>
    <div>
      <h3>Tech Used:</h3>
      <h4>Presentation</h4>
      <p>{data.projectsJson.tech.presentation}</p>
      <h4>Javascript</h4>
      <p>{data.projectsJson.tech.javascript}</p>
      <h4>Server</h4>
      <p>{data.projectsJson.tech.server}</p>
      <h4>Other</h4>
      <p>{data.projectsJson.tech.other}</p>
    </div>

  </aside>
  )

  return (
    <ProjectPage project={data.projectsJson} location={location}>
      <ProjectIntro project={data.projectsJson} media={image} />
      <ProjectDescription media={techused} project={data.projectsJson}>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};


export const query = graphql`
query ProjectPageQuery($slug: String!) {
    projectsJson(slug: {eq: $slug}){
        className
        description
        text
        title
        images{
          image1
          image2
          image3
          image4
          image5
        }
        tech{
          presentation
          javascript
          server
          other
        }
        links{
            website
            repo
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
`

