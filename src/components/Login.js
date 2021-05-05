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
            <div className='loginCenter'>
                <form onSubmit={this.handleSubmit}>
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>
                                Would you rather app!
                            </h4>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign in</h5>
                            <div class="input-group">
                                <select
                                    onChange={this.selectAuthedUser}
                                    className="custom-select"
                                >
                                    <option value="btnDisabled">
                                        Choose...
                                    </option>
                                    {userIds.map((user) => (
                                        <option
                                            key={user}
                                            value={users[user].id}
                                        >
                                            {users[user].name}
                                        </option>
                                    ))}
                                </select>
                                <div class="input-group-append">
                                    <button
                                        class="btn btn-outline-primary"
                                        type="submit"
                                        disabled={
                                            this.state.toggle === "btnDisabled"
                                        }
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
