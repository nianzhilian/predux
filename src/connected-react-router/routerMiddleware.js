import {CALL_HISTORY_METHOD} from './actionTypes'
export default function(history){
    return function(store){
        return function(next){
            return function(action){
                console.log("这里会走二边--------------------------------------")
                console.log(action)
                if(action.type === CALL_HISTORY_METHOD){
                    const {payload} = action;
                    history[payload.method](...payload.args);
                }else{
                    return next(action);
                }
                
            }
        }
    }
}