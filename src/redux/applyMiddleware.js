import compose from "./compose";
/**
 * 外层函数捕捉中间件集合
 * 中层函数接收创建原始厂库的函数
 * 内层函数 用来增强原始厂库 增强原始的dispatch函数
 */
export default function(...middlewares){
    return function(createStore){
        return function(reducer,defaultState){
            const store = createStore(reducer,defaultState);
            const simpleStore = {
                getState:store.getState,
                dispatch:store.dispatch
            }
            let dispatch;
            //返回的是创建dispatch函数的集合  每一个元素都是一个函数  调用函数会返回dispatch函数
            const dispatchProducers = middlewares.map((mid)=>mid(simpleStore));
            console.log(dispatchProducers)
            dispatch = compose(...dispatchProducers)(store.dispatch)
            return {
                ...store,
                dispatch
            }
        }
    }
}