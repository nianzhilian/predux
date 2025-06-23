import { LOCATION_CHANGE,CALL_HISTORY_METHOD } from "./actionTypes";

//路由改变的生成action的创建函数
export function createLoactionChange(action,location){
    return {
        type:LOCATION_CHANGE,
        payload:{
            action,
            location
        }
    }
}

//调用对应的history方法生成的action创建函数
export function push(...args){
    return {
        type:CALL_HISTORY_METHOD,
        payload:{
            method:'push',
            args
        }
    }
}