import Parallax from 'parallax-js';
import React from 'react';

class Paraletters extends React.Component {

    static defaultProps = {
        classes: '', 
    }

    componentDidMount() {
        var scene = document.getElementById(this.props.id);
        this.parallaxInstance = new Parallax(scene);
    }

    componentWillUnmount() {
        this.parallaxInstance.destroy();
    }

    render() {
        const Tag = this.props.tag;
        let secondaryClass = Tag + ' -top -full-width';
        let tertiaryClass = Tag + ' -middle -full-width';
        return (
            // data-hover-only="true"
        <div className={"paralax-container " + this.props.classes}>
            <div id={this.props.id} className="-full-width scene" data-relative-input="true" data-calibrate-x="true" data-calibrate-y="true" data-limit-x={this.props.limitX} data-limit-y={this.props.limitY} data-scalar-x="100" data-scalar-y="100">
                <span className={secondaryClass} data-depth=".2">{this.props.letters}</span>    
                <span className={tertiaryClass} data-depth=".1">{this.props.letters}</span>
            </div>
            <Tag className="-base">{this.props.letters}</Tag>
            
        </div>
        );
    }    
}

Paraletters.defaultProps = {
    classes: "",
}


export default Paraletters;