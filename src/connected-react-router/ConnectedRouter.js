import React from 'react'
import { Router } from "react-router-dom"
export default class ConnectedRouter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.history);
        return (
            <Router history={this.props.history}>
                {this.props.children}
            </Router>
        )
    }
}