import React, { Component } from "react";
import Question from './Question'


class Answered extends Component {
    render() {
        return (
            <Question id={this.props.id} value='View poll'/>
        );
    }
}


export default Answered;
