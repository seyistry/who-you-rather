import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { Redirect } from "react-router-dom";

class QuizView extends Component {
    state = {
        toggle: '',
        answer: "",
        toPoll: false,
    };

    answerChange = (e) => {
        const toggle = e.target.checked;
        const answer = e.target.value;


        this.setState(() => ({
            toggle, answer
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { answer } = this.state;
        console.log(answer)
        const { dispatch, id } = this.props;

        dispatch(handleSaveQuestionAnswer(id, answer));

        this.setState(() => ({
            answer: "",
            toPoll: true,
        }));
    };

    render() {
        const { toPoll, toggle } = this.state;

        const { id, question } = this.props;
    

        if (question === undefined) {
            return <p>The Poll Doesn't exist</p>;
        }

        if (toPoll === true) {
            return <Redirect to={`/poll/${id}`} />;
        }

        const { optionOne, optionTwo } = question;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Would you rather</p>
                    <input
                        type="radio"
                        name="answer"
                        value='optionOne'
                        onChange={this.answerChange}
                    />
                    <label htmlFor="optionOne">{optionOne.text}</label>
                    <br />
                    <input
                        type="radio"
                        name="answer"
                        value='optionTwo'
                        onChange={this.answerChange}
                    />
                    <label htmlFor="optionTwo">{optionTwo.text}</label>
                    <br />
                    <br />
                    <button className="btn" disabled={toggle === ""}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params;
    const question = questions[id];
    return {
        id,
        authedUser,
        question,
    };
}

export default connect(mapStateToProps)(QuizView);
