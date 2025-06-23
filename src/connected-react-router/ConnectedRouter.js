import React from 'react'
import { Router } from "react-router-dom"
import ctx from '../react-redux/ctx';
import { createLoactionChange } from './action-creater';
export default class ConnectedRouter extends React.Component{
    static contextType = ctx;
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const store = this.context;
        this.unlistener = this.props.history.listen(({action,location})=>{
            store.dispatch(createLoactionChange(action,location))
        });
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