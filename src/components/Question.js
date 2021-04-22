import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
    render() {
        const { question } = this.props;

        if (question === null) {
            return <p>This question doesn't exist</p>;
        }

        const { name, optionOne, optionTwo, avatar } = question;

        return (
            <div className="question">
                <p className="question-title">{`${name} asks`}</p>
                <div className="question-content">
                    <img src={avatar} alt="avatar" className="avatar" />
                    <div className="question-info">
                        <div>
                            {optionOne.text}
                        </div>
                        <div>
                            {optionTwo.text}
                        </div>
                        <button className='btn'>View poll</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];

    return {
        authedUser,
        question: Question
            ? formatQuestion(question, users[question.author])
            : null,
    };
}

export default connect(mapStateToProps)(Question);
