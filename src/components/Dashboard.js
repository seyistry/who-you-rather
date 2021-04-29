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
            <div className='center'>
                <div className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <span
                                    className="nav-link active"
                                    onClick={this.handleUnAnswerView}
                                >
                                    Unanswered Question
                                </span>
                            </li>
                            <li class="nav-item">
                                <span
                                    className="nav-link"
                                    onClick={this.handleAnswerView}
                                >
                                    Answered Question
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
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
                </div>
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
