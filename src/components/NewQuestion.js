import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
    state = {
        inputOne: "",
        inputTwo: "",
        toHome: false,
    };

    inputOneChange = (e) => {
        const inputOne = e.target.value;

        this.setState(() => ({
            inputOne,
        }));
    };

    inputTwoChange = (e) => {
        const inputTwo = e.target.value;

        this.setState(() => ({
            inputTwo,
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { inputOne, inputTwo } = this.state;

        const { dispatch, id } = this.props;

        dispatch(handleAddQuestion(inputOne, inputTwo, id));

        this.setState(() => ({
            inputOne: "",
            inputTwo: "",
            toHome: id ? false : true,
        }));
    };

    render() {
        const { inputOne, inputTwo, toHome } = this.state;

        if (toHome === true) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <div className="card newQuestion-container">
                    <div className="card-header text-center">
                        Create New Question
                    </div>
                    <div className="card-body">
                        <p>Complete the question:</p>
                        <h2 className="card-title">Who You Rather...</h2>
                        <form
                            className="new-tweet form-group"
                            onSubmit={this.handleSubmit}
                        >
                            <input
                                placeholder={`Option One`}
                                value={inputOne}
                                onChange={this.inputOneChange}
                                className="form-control"
                                maxLength={150}
                            />
                            <br />
                            <p className="text-center">OR</p>

                            <input
                                placeholder={`Option Two`}
                                value={inputTwo}
                                onChange={this.inputTwoChange}
                                className="form-control"
                                maxLength={150}
                            />
                            <br />
                            <button
                                className="btn quiz-btn btn-outline-primary"
                                type="submit"
                                disabled={inputOne === "" || inputTwo === ""}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(NewQuestion);
