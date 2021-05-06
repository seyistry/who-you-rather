import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class PollView extends Component {
    render() {
        const { question, userAnswer, user } = this.props;

        if (question === undefined) {
            return <Redirect to={`/404/`} />;
        }

        const { optionOne, optionTwo } = question;
        const one = optionOne.votes.length;
        const two = optionTwo.votes.length;
        const percentOne = Math.round((one / (one + two)) * 100);
        const percentTwo = Math.round((two / (one + two)) * 100);
        return (
            <div>
                <div className="card pollView-container">
                    <div className="card-header font-weight-bolder">
                        Asked by {user.name}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <img
                                    src={user.avatarURL}
                                    alt="avatar"
                                    className="avatar align-middle helper"
                                />
                            </div>
                            <div className="col-9 border-left">
                                <p
                                    className="font-weight-bold"
                                    style={{ "font-size": "20px" }}
                                >
                                    Result:
                                </p>
                                {userAnswer === "optionOne" ? (
                                    <div>
                                        <div className="border p-2">
                                            <p>
                                                {optionOne.text}?{" "}
                                                <span class="badge badge-pill badge-warning">
                                                    Your Vote
                                                </span>
                                            </p>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar"
                                                    role="progressbar"
                                                    style={{
                                                        width: `${percentOne}%`,
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {percentOne}%
                                                </div>
                                            </div>
                                            <p>
                                                {one} out of {one + two} votes
                                            </p>
                                        </div>
                                        <br />
                                        <div className="border p-2">
                                            <p>{optionTwo.text}? </p>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar"
                                                    role="progressbar"
                                                    style={{
                                                        width: `${percentTwo}%`,
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {percentTwo}%
                                                </div>
                                            </div>
                                            <p className="text-center">
                                                {two} out of {one + two} votes
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="border p-2">
                                            <p>{optionOne.text}? </p>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{
                                                        width: `${percentOne}%`,
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {percentOne}%
                                                </div>
                                            </div>
                                            <p className="text-center">
                                                {one} out of {one + two} votes
                                            </p>
                                        </div>
                                        <br />
                                        <div className="border p-2">
                                            <p>
                                                {optionTwo.text}?{" "}
                                                <span class="badge badge-pill badge-warning">
                                                    Your Vote
                                                </span>
                                            </p>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{
                                                        width: `${percentTwo}%`,
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {percentTwo}%
                                                </div>
                                            </div>
                                            <p className="text-center">
                                                {two} out of {one + two} votes
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params;
    const question = questions[id];
    const userAnswer = users[authedUser].answers[id];
    const user = question ? users[question.author] : null;

    return {
        question,
        userAnswer,
        user,
    };
}

export default connect(mapStateToProps)(PollView);
