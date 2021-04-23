import React, { Component } from "react";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import { connect } from "react-redux";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            toggle: true,
        };
    }

    handleAnswerView = (e) => {
        e.preventDefault();
        this.setState({ toggle: false });
    };

    handleUnAnswerView = (e) => {
        e.preventDefault();
        this.setState({ toggle: true });
    };

    render() {
        return (
            <div>
                <div className="dashboard-container">
                    <span
                        className="dashboard-title"
                        onClick={this.handleUnAnswerView}
                    >
                        Unanswered Question
                    </span>
                    <span
                        className="dashboard-title"
                        onClick={this.handleAnswerView}
                    >
                        Answered Question
                    </span>
                </div>
                <ul>
                    {this.state.toggle === true
                        ? this.props.unAnsweredIds.map((id) => (
                              <li key={id}>
                                  <div>
                                      <Unanswered id={id} />
                                  </div>
                              </li>
                          ))
                        : this.props.answeredIds.map((id) => (
                              <li key={id}>
                                  <div>
                                      <Answered id={id} />
                                  </div>
                              </li>
                          ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ questions, authedUser }) {
    const answeredIds = Object.keys(questions)
        .filter((key) =>
            questions[key].optionOne["votes"].includes(authedUser) ||
            questions[key].optionTwo["votes"].includes(authedUser)
                ? true
                : false
        )
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const unAnsweredIds = Object.keys(questions)
        .filter((key) =>
            questions[key].optionOne["votes"].includes(authedUser) ||
            questions[key].optionTwo["votes"].includes(authedUser)
                ? false
                : true
        )
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
        answeredIds,
        unAnsweredIds,
    };
}

export default connect(mapStateToProps)(Dashboard);
