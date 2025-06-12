import React from 'react'
import { connect } from 'react-redux';
import store from '..';
import { increase,decrease,asyncIncrease,asyncDecrease} from '../action/counter';
/**
 * store--》容器组件提供数据--》传递给展示组件  展示组件用来展示数据
 */

function TestCount(props){
    return (
        <div>
            <p>{props.count}</p>
            <button onClick={props.onAsyncDecrease}>异步减</button>
            <button onClick={props.onDecrease}>减</button>
            <button onClick={props.onIncrease}>加</button>
            <button onClick={props.onAsyncIncrease}>异步加</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        count:state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrease:function(){
            dispatch(increase());
        },
        onDecrease:function(){
            dispatch(decrease())
        },
        onAsyncIncrease:function(){
            dispatch(asyncIncrease())
        },
        onAsyncDecrease:function(){
            dispatch(asyncDecrease())
        }
    }
}

// class CountContainer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = mapStateToProps(store.getState());
//         //添加订阅 当dispatch发生的时候 会依次调用 订阅的函数
//         //返回一个新的函数 取消订阅  就是从数组中将新添加的删除掉
//         this.cancleSubscribe = store.subscribe(()=>{
//             this.setState(mapStateToProps(store.getState()))
//         });
//     }
//     componentWillUnmount(){
//         //当组件卸载的时候删除订阅
//         this.cancleSubscribe();
//     }
//     render(){
//         const handles = mapDispatchToProps(store.dispatch)
//         return (
//             <TestCount {...this.state} {...handles} />
//         )
//     }
// }

// export default CountContainer;
/**
 * 这个就相当于上面的容器组件
 * connect 就是高阶组件创建函数 返回一个高阶函数（该高阶函数接收一个组件并返回一个新的组件）
 */
console.log(React.createContext())
export default connect(mapStateToProps,mapDispatchToProps)(TestCount)