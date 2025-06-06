import { createEffect,effectTypes } from "../sagaEffectHelp";
//监听action的类型 返回的是一个完整的action
export function take(actionType){
    return createEffect(effectTypes.TAKE,{
        actionType
    })
}
//监听一个action  只要某一个类型的action触发了 就会被监听到 并 返回一个完整的action
export function runTakeEffect(env,effect,next){
    env.channel.take(effect.payload.actionType,(action)=>{
        //把返回的action 作为下一次迭代的参数 这样的话在 generator函数中就可以接收到yield的整个表达式的返回值
        //类似下面
        /*function* generator(){
           var res = yield take('incvasd');
           console.log("当进行第二次迭代时 整个表达式的值 就是通过next传递过来的参数")
        }*/
        next(action);
    })
}