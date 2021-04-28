import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
class Nav extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.setState({ toggle: false });
    };
    render() {
        const { authedUser, users } = this.props;
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" exact activeClassName="active">
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/champs" exact activeClassName="active">
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        {authedUser === null ? (
                            <div></div>
                        ) : (
                            <div>
                                <span>Hello {authedUser}</span>
                                <img
                                    src={
                                        users[authedUser]
                                            .avatarURL
                                    }
                                />
                                <span onClick={this.handleClick}>Logout</span>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    console.log(users);
    return {
        authedUser,
        users,
    };
}

export default connect(mapStateToProps)(Nav);
