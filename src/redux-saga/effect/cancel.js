import { createEffect,effectTypes } from "../sagaEffectHelp";

export function cancel(task){
    return createEffect(effectTypes.CANCEL,{
        task
    })
}

export function runCancelEffect(env,effect,next){
    effect.payload.task.cancel();
    next()
}