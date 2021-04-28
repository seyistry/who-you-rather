import React, { Component } from "react";


class ScoreList extends Component {
    render() {
        const { user } = this.props;

        const answersTotal = Object.keys(user.answers).length;
        const questionsTotal = Object.keys(user.questions).length;
        const score = answersTotal + questionsTotal;

        return (
            <div>
                <p>{`${user.name}`}</p>
                <div>
                    <img src={user.avatarURL} alt="avatar" />
                    <div>
                        <div>Total Answered: {answersTotal}</div>
                        <div>Total Questions: {questionsTotal}</div>
                        <div>Score : {score}</div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ScoreList;
