import React,{Component} from 'react'
export default class SearchBar extends Component{
    constructor(props){
        super(props)
        const def = {
            page:'',
            size:10
        }
        this.state = Object.assign({},def,props.defaultValue);
    }
    handleSearch = ()=>{
        if(this.props.onSearch){
            this.props.onSearch(this.state)
        }
    }
    render(){
        return (
            <div>
                查询
                <input type='text' value={this.state.page} onChange={(e)=>this.setState({page:e.target.value})} />
                <button onClick={this.handleSearch}>查询</button>
            </div>
        )
    }
}