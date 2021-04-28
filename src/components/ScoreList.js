import React, { Component } from "react";
import { connect } from "react-redux";

class ScoreList extends Component {
    render() {
        const { user } = this.props;
        console.log(user)
        // const [ name, avatarURL, answers, questions ] = user;

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
