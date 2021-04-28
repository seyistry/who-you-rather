import React, { Component } from "react";
import { connect } from "react-redux";

import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
    state = {
        id: "",
    };

    selectAuthedUser = (e) => {
        const id = e.target.value;
        this.setState(() => ({
            id,
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { id } = this.state;

        const { dispatch } = this.props;

        dispatch(setAuthedUser(id));
    };
    render() {
        const { userIds, users } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="User">Choose a User:</label>
                    <select
                        name="cars"
                        id="cars"
                        onChange={this.selectAuthedUser}
                    >
                        <option value=""></option>
                        {userIds.map((user) => (
                            <option
                                key={user}
                                value={users[user].id}
                            >
                                {users[user].name}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users),
        users,
    };
}

export default connect(mapStateToProps)(Login);
