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
import Login from "./Login";
import Error from "./Error";

class App extends Component {
    render() {
        this.props.handleIntialData();
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="container">
                        <Nav />
                        {this.props.loading === true ? (
                            <Route path="/" component={Login} />
                        ) : (
                            <div>
                                <Route path="/" exact component={Dashboard} />
                                <Route
                                    path="/questions/:id"
                                    component={QuizView}
                                />
                                <Route path="/poll/:id" component={PollView} />
                                <Route path="/add" component={NewQuestion} />
                                <Route
                                    path="/leaderboard"
                                    component={LeaderPoll}
                                />
                                <Route path="/404" component={Error} />
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

export default connect(mapStateToProps, { handleIntialData })(App);
