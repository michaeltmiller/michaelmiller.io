import React from 'react';

import Carousel from '../components/carousel';
import Iphone from '../components/iphone';
import Macbook from '../components/macbook';
import OutboundLink from '../components/outbound-link';
import Wrapper from '../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../components/project';

import styles from './styles.module.css';

// const images = {
//   desktop: [
//     { src: require('./img/centre-detail.png'), description: 'KindyNow centre detail' },
//     { src: require('./img/attendees.png'), description: 'KindyNow attendees list' },
//     { src: require('./img/centre-list.png'), description: 'KindyNow centre list' },
//     { src: require('./img/stats.png'), description: 'KindyNow centre stats' },
//     { src: require('./img/login.png'), description: 'KindyNow login' },
//   ],
//   mobile: [
//     { src: require('./img/mobile-centre-detail.png'), description: 'kindyNow centre detail rooms' },
//     { src: require('./img/mobile-centre-detail-rooms.png'), description: 'kindyNow centre detail' },
//     { src: require('./img/mobile-attendees.png'), description: 'kindyNow attendees list' },
//     { src: require('./img/mobile-centre-list.png'), description: 'kindyNow centre list' },
//     { src: require('./img/mobile-calendar.png'), description: 'kindyNow calendar date picker' },
//   ],
// };

export default ({ data, location }) => {
const icon = require(`./img/${data.projectsJson.cover.source}.png`)
const images = [
  { src: require(`./img/${data.projectsJson.images.image1}.png`), description: 'kindyNow centre detail rooms' },
  { src: require(`./img/${data.projectsJson.images.image2}.png`), description: 'kindyNow centre detail rooms2' },
  { src: require(`./img/${data.projectsJson.images.image3}.png`), description: 'kindyNow centre detail rooms4' },
  { src: require(`./img/${data.projectsJson.images.image3}.png`), description: 'kindyNow centre detail rooms3' },
  { src: require(`./img/${data.projectsJson.images.image3}.png`), description: 'kindyNow centre detail rooms5' }
]
const screenshots = [
  { src: "http://via.placeholder.com/1000x640" , description: 'kindyNow centre detail rooms' },
  { src: "http://via.placeholder.com/1000x640", description: 'kindyNow centre detail rooms2' },
  { src: "http://via.placeholder.com/350x150", description: 'kindyNow centre detail rooms3' }
]
  const image = (
    <div className={styles.image}>
      <img src={icon}  alt={data.projectsJson.cover.alternative} />
    </div>
  );


  return (
    <ProjectPage project={data.projectsJson} location={location}>
      <ProjectIntro project={data.projectsJson} media={image} />
      <ProjectDescription project={data.projectsJson}>
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
        }
        links{
            website
        }
        slug
        theme{
            background
        }
        cover{
            source
            alternative
        }
    } 
}
`

// query BlogPostQuery($slug: String!) {
//   markdownRemark(fields: { slug: { eq: $slug } }) {
//     html
//     frontmatter {
//       title
//     }
//   }
// }