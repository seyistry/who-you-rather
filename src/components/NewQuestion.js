import React, { Component } from "react";
import { connect } from "react-redux";
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'

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
            toHome: id ? false : true
        }));
    };

    render() {
        const { inputOne, inputTwo, toHome } = this.state;
        
        if (toHome === true){
            return <Redirect to='/' />
        }

        return (
            <div>
                <h3 className="center">Who you rather</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <input
                        placeholder={`Option One`}
                        value={inputOne}
                        onChange={this.inputOneChange}
                        className="textarea"
                        maxLength={150}
                    />

                    <input
                        placeholder={`Option Two`}
                        value={inputTwo}
                        onChange={this.inputTwoChange}
                        maxLength={150}
                    />
                    <button
                        className="btn"
                        type="submit"
                        disabled={inputOne === "" || inputTwo === ""}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(NewQuestion);
