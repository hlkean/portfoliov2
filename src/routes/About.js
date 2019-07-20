import React from 'react';
import Paraletters from '../Components/Paraletters';
import Tiger from '../assets/images/Henry_Kean_tiger.jpg';
import {Helmet} from "react-helmet";

class About extends React.Component {
  
    render() {
      return (
        <div className="-full-height -flex -col">
          <Helmet>
            <title>About | Henry Kean</title>
            <meta name="description" content="Henry Kean is a full-stack developer with a passion for coming up with new ideas and learning new things." />
          </Helmet>
          <Paraletters id="about-header" tag="h1" classes="-p-top-25" letters="About" limitX="50" limitY="40"/>
          <div className="-max-w-950 -p-y-25 -m-0-auto">
              <div className="-p-x-25 -flex -justify-center -space-between -align-items-center -txt-img-50-50">
                <h2 className="-m-top-0">Hey there, tiger</h2>
                <img src={Tiger} alt=""/>
              </div>
              <p>I’m a full-stack developer with a passion for coming up with new ideas and learning new things. Combing an education in psychology with a master’s degree in Interactive media, I love to think up with new projects or solutions to problems backed by qualitative and quantitative data.</p>
              <p>Though my job title has primarily been as an engineer, I have contributed insights and ideas to international digital campaigns for enterprise level clients, helped win new business, won startup competitions, and aided in developing a business growing measurement culture in a startup. Below you'll find an ever expanding list of tools that I've used along the way to help create and build some amazing projects:</p>
              <ul>
                <li>Front-end: HTML, CSS/SCSS, Javascript/jQuery/ES6</li>
                <li>Front-end Frameworks: Vue, Ember, React</li>
                <li>Backend: PHP/Laravel/CodeIgniter, MySQL</li>
                <li>SEO: SEMRush, Google Search Console, Lighthouse</li>
                <li>CMS: Grav, Hippo</li>
                <li>Design/Creative: Adobe Creative Suite (primarily Photoshop, Illustrator, and AfterEffects), Sketch, Figma</li>
                <li>Other: Git, Gulp, Jira</li>
              </ul>
              <p>I’m always looking for new experiences. If you’d like to work together, or want to learn more about my previous work, please don’t hesitate to reach out!</p>
          </div>
              
        </div>
      );
    }
}

export default About;