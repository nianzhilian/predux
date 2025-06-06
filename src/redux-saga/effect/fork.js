import { createEffect,effectTypes } from "../sagaEffectHelp";
import runSaga from "../runSaga";
//启动一个新的任务
//run(createGrentor,...args)
export function fork(grentorFn,...args){
    return createEffect(effectTypes.FORK,{
        fn:grentorFn,
        args
    })
}

export function runEffecrFork(env,effect,next){
    //重启一个新的任务线
    var task = runSaga(env,effect.payload.fn);
    //不会阻塞原来任务线的执行
    //本次的任务线继续执行
    next(task);
}