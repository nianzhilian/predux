/**
 * 判断是否是平面对象
 * @param {*} obj 
 */
function isPlainObject(obj){
    if(typeof obj!='object'){
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype
}
/**
 * 生成一个6位的随机字符串
 */
function getRandomStr(len){
    return Math.random().toString(36).substring(2,len+2).split("").join(".");
}
export default function(reducer,initState){
    let currentReducer = reducer,currentState = initState;
    let listens = [];
    function dispatch(action){
        //限制条件
        //action 必须是一个平面对象
        //必须有type属性
        if(!isPlainObject(action)){
            throw new TypeError('action必须是平面对象');
        }
        if(action.type === undefined){
            throw new TypeError('action对象必须有type属性');
        }
        currentState = currentReducer(currentState,action);
        //store更新完state之后 依次调用添加的监听器
        for (const listen of listens) {
            listen();
        }
    }
    //初始化store的时候会默认 dispatch一个特殊的type类型
    dispatch({
        type:`@@redux/INIT${getRandomStr(6)}`
    })

    function getState(){
        return currentState;
    }

    function subscribe(listen){
        listens.push(listen);
        //如果已经取消监听了 则直接返回
        let isRemove = false;
        //返回一个函数 执行清除监听器的操作
        return function(){
            if(isRemove){
                return;
            }
            const index = listens.indexOf(listen);
            listens.splice(index,1);
            isRemove = true;
        }
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}