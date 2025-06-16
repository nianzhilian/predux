import React,{Component} from 'react'
export default class SearchBar extends Component{
    //当设置这个的时候  即使自己内部的状态发生变化了 最终这个方法返回的对象 还是会覆盖他修改后的state
    static getDerivedStateFromProps(nextProps,prevState){
        console.log("nextProps:",nextProps);
        console.log("prevState:",prevState);
        if(!prevState.isUserInput && prevState.page !=nextProps.defaultValue.page){
            return {
                page:nextProps.defaultValue?.page,
                size:nextProps.defaultValue?.size,
                isUserInput:false
            };
        }
        return null;
    }
    constructor(props){
        super(props)
        const def = {
            page:'',
            isUserInput: false //添加标记用来区分是props更新 还是用户输入更新
        }
        this.state = Object.assign({},def,props.defaultValue);
    }
    handleSearch = ()=>{
        if(this.props.onSearch){
            //重置标记
            this.setState({ isUserInput: false });
            this.props.onSearch(this.state)
        }
    }
    render(){
        console.log('searchbar组件渲染',this.state)
        return (
            <div>
                查询
                <input type='text' value={this.state.page} onChange={(e)=>this.setState({page:e.target.value,isUserInput:true})} />
                <button onClick={this.handleSearch}>查询</button>
            </div>
        )
    }
}