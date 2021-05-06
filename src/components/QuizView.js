import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { Redirect } from "react-router-dom";

class QuizView extends Component {  
    state = {
        toggle: "",
        answer: "",
        toPoll: false,
    };

    answerChange = (e) => {
        const toggle = e.target.checked;
        const answer = e.target.value;

        this.setState(() => ({
            toggle,
            answer,
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { answer } = this.state;
        const { dispatch, id } = this.props;

        dispatch(handleSaveQuestionAnswer(id, answer));

        this.setState(() => ({
            answer: "",
            toPoll: true,
        }));
    };

    render() {
        const { toPoll, toggle } = this.state;

        const { id, question, user } = this.props;

        if (question === undefined) {
            return <Redirect to={`/404/`} />;
        }

        if (toPoll === true) {
            return <Redirect to={`/poll/${id}`} />;
        }

        const { optionOne, optionTwo } = question;
        return (
            <div className="card quizView-container">
                <h5 className="card-header">{user.name} asks</h5>
                <div className="row p-3">
                    <div className="col-4 pt-4">
                        <img
                            src={user.avatarURL}
                            alt="avatar"
                            className="avatar"
                        />
                    </div>
                    <form
                        className="form-check col-8 border-left"
                        onSubmit={this.handleSubmit}
                    >
                        <p className="font-weight-bold quiz-title ">
                            Would You Rather...
                        </p>
                        <div className='pl-4'>
                            <input
                                className="form-check-input text-left"
                                type="radio"
                                name="answer"
                                value="optionOne"
                                onChange={this.answerChange}
                            />
                            <label htmlFor="optionOne">{optionOne.text}</label>
                            <br />
                            <input
                                className="form-check-input text-center"
                                type="radio"
                                name="answer"
                                value="optionTwo"
                                onChange={this.answerChange}
                            />
                            <label htmlFor="optionTwo">{optionTwo.text}</label>
                        </div>
                        <button
                            className="btn btn-outline-primary quiz-btn"
                            disabled={toggle === ""}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, users }, props) {
    const { id } = props.match.params;
    const question = questions[id];
    const user = question ? users[question.author] : null;
    return {
        id,
        user,
        question,
    };
}

export default connect(mapStateToProps)(QuizView);
