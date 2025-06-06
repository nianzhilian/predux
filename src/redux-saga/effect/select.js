import { createEffect,effectTypes } from "../sagaEffectHelp";
export function select(func){
    return createEffect(effectTypes.SELECT,{
        fn:func
    })
}
//返回厂库里的状态 并将取到的状态 作为参数传递到下一次的next  这样的话这个参数会作为整个yield的表达式返回
//只要是表达式都会有返回值
export function runEffectSelect(env,effect,next){
    let state = env.store.getState();
    if(effect.payload.fn){
        state = effect.payload.fn(state);
    }
    next(state)
}