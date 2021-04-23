import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import PollView from './PollView'
import QuizView from './QuizView'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleIntialData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="container">
                        <Nav />
                        <div>
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/quiz/:id" component={QuizView} />
                            <Route path="/poll/:id" component={PollView} />
                            <Route path="/new" component={NewQuestion} />
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default connect()(App);
