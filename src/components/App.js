import React, { Component } from "react";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleIntialData());
    }

    render() {
        return (
            <div>
                <Dashboard />
            </div>
        );
    }
}

export default connect()(App);
