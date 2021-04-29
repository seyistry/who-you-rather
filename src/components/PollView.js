import React, { Component } from "react";
import { connect } from "react-redux";

class PollView extends Component {
    render() {
        const { question, user } = this.props;

        if (question === undefined) {
            return <p>The Poll Doesn't exist</p>;
        }

        if (user === "optionOne") {
        } else {
        }

        const { optionOne, optionTwo } = question;
        const one = optionOne.votes.length;
        const two = optionTwo.votes.length;
        const percentOne = Math.round((one / (one + two)) * 100);
        const percentTwo = Math.round((two / (one + two)) * 100);
        return (
            <div>
                <p>Would you rather</p>
                {user === "optionOne" ? (
                    <div>
                        <p>
                            {optionOne.text} Total votes: {one} at {percentOne}% user choice
                        </p>
                        <p>
                            {optionTwo.text} Total votes: {two} at {percentTwo}%
                        </p>
                    </div>
                ) : (
                    <div>
                        <p>
                            {optionOne.text} Total votes: {one} at {percentOne}%
                        </p>
                        <p>
                            {optionTwo.text} Total votes: {two} at {percentTwo}% user choice
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params;
    const question = questions[id];
    const user = users[authedUser].answers[id];
    console.log(user);
    return {
        question,
        user,
    };
}

export default connect(mapStateToProps)(PollView);
