import React, {Component} from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <div>
                               Questions Ids: {id}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}){
    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timeStamp - questions[a].timeStamp)
    }
}

export default connect(mapStateToProps)(Dashboard);