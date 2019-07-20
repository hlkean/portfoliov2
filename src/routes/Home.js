import React from 'react';
import Paraletters from '../Components/Paraletters';
import {Helmet} from "react-helmet";


class Home extends React.Component {
    
    render() {
        
      return (
          <div>
            <Helmet>
                <title>Home | Henry Kean</title>
                <meta name="description" content="Henry Kean is a software engineer based in New York City." />
            </Helmet>
            <div className="home"> 
                <div className="letters">
                    <Paraletters id="lax-header" tag="h1" letters="Henry Kean" limitX="50" limitY="40"/>
                    <Paraletters id="lax-name" tag="h3" letters="Product-Minded Developer" limitX="50" limitY="40"/>
                </div>
                <div class="bg-img">
                </div>
            </div>
            <p className="h4 color white">Analytical Thinking + Creative Passion + Engineering Know-how</p>
        </div>

        );
    }
}

export default Home;