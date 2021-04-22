import React, { Component } from "react";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import { connect } from "react-redux";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul className="list">
                        <p className="dashboard-title">Unanswered Question</p>
                        {this.props.unAnsweredIds.map((id) => (
                            <li key={id}>
                                <div>
                                    <Unanswered id={id} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="list">
                        <p className="dashboard-title">Answered Question</p>
                        {this.props.answeredIds.map((id) => (
                            <li key={id}>
                                <div>
                                    <Answered id={id} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, authedUser }) {
    const questionIds = Object.keys(questions).sort(
        (a, b) => questions[b].timeStamp - questions[a].timeStamp
    );
    const answeredIds = questionIds.filter((key) =>
        questions[key].optionOne["votes"].includes(authedUser) ||
        questions[key].optionTwo["votes"].includes(authedUser)
            ? true
            : false
    );
    const unAnsweredIds = questionIds.filter((key) =>
        questions[key].optionOne["votes"].includes(authedUser) ||
        questions[key].optionTwo["votes"].includes(authedUser)
            ? false
            : true
    );
    return {
        answeredIds,
        unAnsweredIds,
    };
}

export default connect(mapStateToProps)(Dashboard);
