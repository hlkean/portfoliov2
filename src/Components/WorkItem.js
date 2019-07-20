import { Link } from 'react-router-dom';
import React from 'react';

class WorkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = 'work-item no-hover ' + this.props.client.layout;
      return (
        <Link className={classes} to={this.props.link}>
            <h2>{this.props.client.title}</h2>
            <div className="img-container" style={{backgroundImage: 'url(\''+this.props.logo + '\')'}}>
            </div>
        </Link>
        );
    }
}

export default WorkItem;