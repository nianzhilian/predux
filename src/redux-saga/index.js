
import runSaga from "./runSaga"
import Channel from "./Channel";
/**
 * 
 * @returns 返回一个中间件
 */
export default function(){
    function sagaMiddleWare(store){
        const env = {
            store,
            channel:new Channel()
        }
        //bind apply 和 call的区别
        //bind不会执行函数而是返回一个新的函数
        //apply和call会执行函数
        sagaMiddleWare.run = runSaga.bind(null,env);
        return function(next){
            return function(action){
                var res = next(action);
                env.channel.put(action.type,action)
                return res;
            }
        }
    }
    return sagaMiddleWare
}