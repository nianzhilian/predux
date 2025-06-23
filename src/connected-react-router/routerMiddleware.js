import {CALL_HISTORY_METHOD} from './actionTypes'
export default function(history){
    return function(store){
        return function(next){
            return function(action){
                console.log("这里会走二边--------------------------------------")
                console.log(action)
                if(action.type === CALL_HISTORY_METHOD){
                    console.log("走路由跳转了")
                }else{
                    return next(action);
                }
                
            }
        }
    }
}