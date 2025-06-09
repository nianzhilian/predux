import { createEffect,effectTypes } from "../sagaEffectHelp";
import { enhanceFn } from "../runSaga";
export function all(generators){
    return createEffect(effectTypes.ALL,{
        generators
    })
}
export function runAllEffect(env,effect,next){
    const {generators} = effect.payload;
    const tasks = generators.map((gt)=>enhanceFn(env,gt));
    //等到所有的task完成之后 
    const promises = tasks.map((ta)=>{
        return ta.toPromise();
    })
    Promise.all(promises).then((v)=>next());
}