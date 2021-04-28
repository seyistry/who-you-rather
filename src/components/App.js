import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import PollView from "./PollView";
import QuizView from "./QuizView";
import LeaderPoll from "./LeaderPoll";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleIntialData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="container">
                        <Nav />
                        {this.props.loading === true ? null : (
                            <div>
                                <Route path="/" exact component={Dashboard} />
                                <Route path="/questions/:id" component={QuizView} />
                                <Route path="/poll/:id" component={PollView} />
                                <Route path="/add" component={NewQuestion} />
                                <Route path="/champs" component={LeaderPoll} />
                            </div>
                        )}
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null,
    };
}

export default connect(mapStateToProps)(App);
