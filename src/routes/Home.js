import React from 'react';
import Paraletters from '../Components/Paraletters';
import {Helmet} from "react-helmet";
const assets = require.context('../../public/assets');
const copy = assets('./content/aboutContent.json');


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ""
        }
    }
    componentDidMount() {
        console.log("mount");
            let route = this.props.location.pathname === "/" ? "Home" : "About"
            document.title = route + " | Henry Kean"
            this.setContent(route);
    }

    setContent(route) {
        console.log("set content");
        this.setState({content: copy[route]});
        document.title = route + " | Henry Kean"
    }

    shouldComponentUpdate(nextProps, nextState) {
        const update = nextProps.location.pathname !== this.props.location.pathname || nextState.content !== this.state.content;
        if(update) {
            let route = nextProps.location.pathname === "/" ? "Home" : "About"
            document.title = route + " | Henry Kean"
            this.setContent(route);
        };
        return update;
    }
    
    render() {
        console.log("content::", this.state.content);
      return (
          <div>
            <Helmet>
                <meta name="description" content="Henry Kean is a software engineer based in Boston, Massachusetts." />
            </Helmet>
            <div className="home"> 
                <div className="letters">
                    <Paraletters id="lax-header" tag="h1" letters={this.state.content.header} limitX="50" limitY="40"/>
                    {this.state.content.sub && <Paraletters id="lax-name" tag="h3" letters={this.state.content.sub} limitX="50" limitY="40"/>}
                </div>
                <div className="bg-img">
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: this.state.content.body }}></div>
        </div>

        );
    }
}

export default Home;