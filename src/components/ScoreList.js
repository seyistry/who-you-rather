import React, { Component } from "react";

class ScoreList extends Component {
    render() {
        const { user } = this.props;

        const answersTotal = Object.keys(user.answers).length;
        const questionsTotal = Object.keys(user.questions).length;
        const score = answersTotal + questionsTotal;

        return (
            <div>
                <div class="card">
                    <div class="card-body">
                        <div className="row">
                            <div className="col-3 pt-3">
                                <img
                                    src={user.avatarURL}
                                    className="avatar"
                                    alt="avatar"
                                />
                            </div>
                            <div className="col-6 border-left border-right">
                                <p className="font-weight-bolder">{`${user.name}`}</p>
                                <p>
                                    Total Answered: <b>{answersTotal}</b>
                                </p>
                                <hr />
                                <p>
                                    Total Questions: <b>{questionsTotal}</b>
                                </p>
                            </div>
                            <div className="col-3">
                                <div class="card">
                                    <h5 class="card-header">Score</h5>
                                    <div class="card-body">
                                        <p class="card-text text-center">
                                            <strong>{score}</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default ScoreList;
