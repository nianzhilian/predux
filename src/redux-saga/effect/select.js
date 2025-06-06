import { createEffect,effectTypes } from "../sagaEffectHelp";
export function select(func){
    return createEffect(effectTypes.SELECT,{
        fn:func
    })
}

export function runEffectSelect(env,effect,next){
    console.log(env)
    console.log(effect);
}