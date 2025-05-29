import { createEffect,effectTypes } from "../sagaEffectHelp";
/**
 * 创建一个指令对象
 */
export function put(action){
    return createEffect(effectTypes.PUT,{
        action
    })
}
export function runPutEffect(env,effect,next){
    const {store} = env;
    const {payload} = effect;
    let res = store.dispatch(payload.action);
    console.log(res);
    next(res);
}