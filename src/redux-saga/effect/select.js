import { createEffect,effectTypes } from "../sagaEffectHelp";
export function select(func){
    return createEffect(effectTypes.SELECT,{
        fn:func
    })
}

export function runEffectSelect(env,effect,next){
    let state = env.store.getState();
    if(effect.payload.fn){
        state = effect.payload.fn(state);
    }
    next(state)
}