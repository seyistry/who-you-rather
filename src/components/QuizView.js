import React, { Component } from "react";
import {connect} from 'react-redux'

class QuizView extends Component {
    render() {
        const { id, authedUser, question } = this.props;
        
        if (question === undefined) {
            return <p>The Poll Doesn't exist</p>;
        }
        
        const { optionOne, optionTwo, } = question;
        return (
            <div>
                <form>
                    <p>Would you rather</p>
                    <input type="radio" name="quiz" value="optionOne" />
                    <label htmlFor="optionOne">{optionOne.text}</label>
                    <br />
                    <input type="radio" name="quiz" value="optionTwo" />
                    <label htmlFor="optionTwo">{optionTwo.text}</label>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params;
    const question = questions[id]
    return {
        authedUser,
        question,
    };
}

export default connect(mapStateToProps)(QuizView);
