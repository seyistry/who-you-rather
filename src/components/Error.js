import React, { Component } from "react";

class Error extends Component {
    render() {
        return (
            <div className="main">
                <div className="error">
                    <h1>404 Not Found</h1>
                    <p>
                        Sorry, an error has occured, Requested page not found!{" "}
                    </p>
                </div>
            </div>
        );
    }
}

export default Error;
