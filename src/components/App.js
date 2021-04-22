import React, { Component } from "react";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from './NewQuestion'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleIntialData());
    }

    render() {
        return (
            <div>
                <NewQuestion />
            </div>
        );
    }
}

export default connect()(App);
