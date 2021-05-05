import React, { Component } from "react";
import { connect } from "react-redux";
import ScoreList from "./ScoreList";

class LeaderPoll extends Component {
    render() {
        return (
            <div className='leaderPoll'>
                <ul className="dashboard-list">
                    {this.props.userSort.map((user) => (
                        <li key={user.id} >
                            <ScoreList user={user} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    const userSort = Object.keys(users)
        .map((id) => users[id])
        .sort(
            (a, b) =>
                b.questions.length +
                Object.keys(b.answers).length -
                (a.questions.length + Object.keys(a.answers).length)
        );
    return {
        userSort,
    };
}
export default connect(mapStateToProps)(LeaderPoll);
