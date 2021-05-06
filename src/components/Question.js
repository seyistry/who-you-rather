import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
    render() {
        const { question } = this.props;

        const { name, optionOne, optionTwo, avatar } = question;

        return (
            <div className="question-container pb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{`${name} asks`}</h5>
                        <div className="card-text row align-items-center">
                            <div className="col-2">
                                <img
                                    src={avatar}
                                    alt="avatar"
                                    className="avatar"
                                />
                            </div>
                            <div className="col-8 text-center">
                                <p>{optionOne.text}</p>
                                <p className=''><em>OR</em></p>
                                <p>{optionTwo.text}</p>
                            </div><Link
                            to={`/${this.props.value}/${this.props.id}`}
                            className="tweet"
                        >
                            <button className="btn btn-outline-primary">
                                View poll
                            </button>
                        </Link>
                        </div>
                        
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
