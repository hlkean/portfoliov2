import React from 'react';
import WorkItem from '../Components/WorkItem';
import Paraletters from '../Components/Paraletters';
import {Helmet} from "react-helmet";
const assets = require.context('../assets');
const Clients = assets('./content/clientContent.json');

function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
        return callback(key, object[key]);
    });
}

class Work extends React.Component {

    componentDidMount(){
        document.title = "Work | Henry Kean"
    }
    

    render() {
        return (
            <div>
                <Helmet>
                    <title>Work | Henry Kean</title>
                    <meta name="description" content="Henry Kean is a software engineer based in New York City who has worked for startups and enterprise level clients." />
                </Helmet>
                <Paraletters id="contact-header" tag="h1" classes="-p-x-25" letters="Work" limitX="50" limitY="40"/>
                {mapObject(Clients, function (client, value) {
                    return <WorkItem key={client} client={value} link={'work/'+client} logo={assets(`./images/${client}/${value.logo}`)} />
                })}
            </div>
          );
    }
}
export default Work;