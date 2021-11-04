import React from 'react';
import { Link } from 'react-router-dom';
import Paraletters from '../Components/Paraletters';
import {Helmet} from "react-helmet";
const assets = require.context('../assets');
const Clients = assets('./content/clientContent.json');

class ClientInfo extends React.Component {

    componentDidMount(){
        document.title = Clients[this.props.match.params.clientId].title + " | Henry Kean"
    }

    render() {
        const client = Clients[this.props.match.params.clientId];
      return (
            <div className="client-info">
                <Helmet>
                    <title>{client.title} | Henry Kean | Henry Kean</title>
                    <meta name="description" content={client.description} />
                </Helmet>
                <Paraletters id="contact-header" tag="h1" classes="-p-x-25" letters={client.title} limitX="50" limitY="40"/>
                <div className="-full-width client-img" style={{backgroundImage: 'url(\''+assets(`./images/${this.props.match.params.clientId}/${client.logo}`)+ '\')'}}></div>
                <div className="-flex -space-between -p-y-25">
                    <Link className="back -m-0 -p-top-25 no-hover" to="/work">&#10232; See More Clients</Link>
                    <a className="site -p-top-25 -align-text-right no-hover" href={client.siteUrl} target="_blank" rel="noopener noreferrer">Visit Site &#10233;</a>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html: client.clientContent}}></div>
            </div>
        );
    }
}

export default ClientInfo;