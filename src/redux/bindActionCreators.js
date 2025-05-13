
/**
 * //bindActionCreators 直接接收一个action创建函数 和 store.dispatch 如果是一个函数则直接调用 内部去dispatch action
//如果接收的是一个对象 返回的跟对象属性相同的数据结构  内部去dispatch action
 */
export default function(obj,dispatch){
    if(typeof obj === "function"){
        return getAutoDispatchAction(obj,dispatch)
    }else if(typeof obj === "object"){
        let result = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const actionCreater = obj[key];
                result[key] = getAutoDispatchAction(actionCreater,dispatch);
            }
        }
        return result;
    }else{
        throw new TypeError("报错了");
    }
}

function getAutoDispatchAction(actionCreate,dispatch){
    /**
     * 将参数汇总成数组  (arg1,arg2)  变成[arg1,arg2]
     * 函数内部展开是重新变成（arg1,arg2） (展开运算符)
     */
    return function(...args){
        const action = actionCreate(...args);
        dispatch(action);
    }
}