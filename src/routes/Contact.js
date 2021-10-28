import React from 'react';
import Paraletters from '../Components/Paraletters';
import Resume from '../assets/images/Henry_Kean_Resume.pdf';
import {Helmet} from "react-helmet";

class Contact extends React.Component {
    render() {
      return (
        <div className="-full-height -flex -col">
          <Helmet>
            <title>Contact | Henry Kean</title>
            <meta name="description" content="Henry Kean is a software engineer based in New York City. Please feel free to reach out to learn more." />
          </Helmet>
          <Paraletters id="contact-header" tag="h1" classes="-p-top-25" letters="Contact" limitX="50" limitY="40"/>
          <div class="-max-w-950 -p-y-25 -m-0-auto -flex -flex-1 -justify-center -col">
              <p>I'm always looking for new opportunities to work on exciting projects. Feel free to take a copy of <a href={Resume} target="_blank">my résumé</a> and <a href="mailto:hlkean@gmail.com">reach out</a> if you'd like to learn more about my past projects or work together on a future one.</p>
              <p>+1 (908) 285-8030 | <a href="mailto:hlkean@gmail.com">hlkean@gmail.com</a></p>
          </div>
              
        </div>
      );
    }
}

export default Contact;