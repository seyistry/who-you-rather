import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import {Link, withRouter} from 'react-router-dom'

class Question extends Component {
    render() {
        const { question } = this.props;

        const { name, optionOne, optionTwo, avatar } = question;

        return (
            <div className="question-container">
                <p className="question-creator">{`${name} asks`}</p>
                <div className="question-content">
                    <img src={avatar} alt="avatar" className="avatar" />
                    <div className="question-info">
                        <div>{optionOne.text}</div>
                        <div>{optionTwo.text}</div>
                        <Link to={`/${this.props.value}/${this.props.id}`} className="tweet">
                            <button className="btn">View poll</button>
                        </Link>
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

export default withRouter(connect(mapStateToProps)(Question));
