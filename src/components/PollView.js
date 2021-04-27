import React, { Component } from "react";
import { connect } from "react-redux";

class PollView extends Component {
    render() {
        const { id, authedUser, question } = this.props;

        if (question === undefined) {
            return <p>The Poll Doesn't exist</p>;
        }

        const { optionOne, optionTwo } = question;
        const one = optionOne.votes.length;
        const two = optionTwo.votes.length;
        const percentOne = (one / (one + two)) * 100;
        const percentTwo = (two / (one + two)) * 100;
        return (
            <div>
                <p>Would you rather</p>
                <div>
                    <p>
                        {optionOne.text} Total votes: {one} at {percentOne}%
                    </p>
                    <p>
                        {optionTwo.text} Total votes: {two} at {percentTwo}%
                    </p>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params;
    const question = questions[id];
    return {
        authedUser,
        question,
    };
}

export default connect(mapStateToProps)(PollView);
