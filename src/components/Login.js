import React, { Component } from "react";
import { connect } from "react-redux";

import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
    state = {
        toggle: "btnDisabled",
        id: "",
    };

    selectAuthedUser = (e) => {
        const toggle = e.target.value;
        console.log(toggle);
        if (toggle !== "btnDisabled") {
            const id = e.target.value;
            this.setState(() => ({
                id,
                toggle: false,
            }));
        } else {
            this.setState(() => ({
                id: "",
                toggle: "btnDisabled",
            }));
        }
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
                        <option value="btnDisabled"></option>
                        {userIds.map((user) => (
                            <option key={user} value={users[user].id}>
                                {users[user].name}
                            </option>
                        ))}
                    </select>
                    <button
                        type="submit"
                        disabled={this.state.toggle === "btnDisabled"}
                    >
                        Submit
                    </button>
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
