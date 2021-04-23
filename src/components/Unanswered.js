import React, { Component } from "react";
import Question from './Question'

class Unanswered extends Component {
    render() {
        return (
            <Question id={this.props.id} value='quiz'/>
        );
    }
}


export default Unanswered;