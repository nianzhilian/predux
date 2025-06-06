import { createEffect,effectTypes } from "../sagaEffectHelp";
//监听action的类型 返回的是一个完整的action
export function take(actionType){
    return createEffect(effectTypes.TAKE,{
        actionType
    })
}
export function runTakeEffect(env,effect,next){
    env.channel.take(effect.payload.actionType,(action)=>{
        next(action);
    })
}